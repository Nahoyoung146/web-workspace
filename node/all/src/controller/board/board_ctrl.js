const ser = require("../../service/board/board_service")
const fs = require("fs")
const views = {
    list: async (req, res) => {
        console.log("start : ", req.query.start)
        const data = await ser.pageRead.list(req.query.start)
        console.log("list page : ", data.page)
        res.render("board/list", { list: data.list, page: data.page, start: data.start, username: req.session.username })
    },
    writeForm: (req, res) => {
        console.log("req.session.name : ", req.session.username)
        console.log("ser : ", ser.pageRead.writeForm(req.session.username))
        let msg = ser.pageRead.writeForm(req.session.username).msg
        let result = ser.pageRead.writeForm(req.session.username).result
        console.log("msg : ", msg)
        console.log("result : ", result)
        if (result == 1) {
            console.log("실행")
            res.send(msg)
        }

        else {
            res.render("board/writeForm", { username: req.session.username })
        }
    },
    content: async (req, res) => {
        console.log("req.params :", req.params)
        console.log("req.params.num : ", req.params.num)
        const data = await ser.pageRead.content(req.params.num)
        res.render("board/content", { data, username: req.session.username })
    },
    download: (req, res) => {
        console.log(req.params)
        const path = `./upload_file/${req.params.fileName}`
        res.download(path)
    },
    modifyForm: async (req, res) => {
        const data = await ser.pageRead.modifyForm(req.params.fileName)
        console.log("ctl_data : ", data)
        res.render("board/modifyForm", { data })
    }
}

const process = {
    write: async (req, res) => {
        console.log("req.file : ", req.file)
        console.log("req.body : ", req.body)
        const body = {}
        body.id = req.body.id
        body.title = req.body.title
        body.content = req.body.content
        if (!req.file) {
            body.originalname = "nan"
            body.filename = "nan"
        }
        else {
            body.originalname = req.file.originalname
            body.filename = req.file.filename
        }
        console.log("originalname : ", body.originalname)
        console.log("filename : ", body.filename)
        console.log("body : ", body)
        const msg = await ser.pageInsert.write(body)
        console.log("확인 : ", req.fileValidation)
        if (!req.fileValidation) {
            res.send(`<script>alert("등록되었습니다!!!!!");
                        location.href = "/board/list";
                    </script>`)
        } else {
            res.redirect("/board/write_form")
        }
    },
    del: async (req, res) => {
        console.log("삭제 : ", req.params)
        const msg = await ser.pageInsert.del(req.params.fileName)
        fs.unlinkSync(`./upload_file/${req.params.fileName}`)
        res.redirect("/board/list")
    },
    modify: async (req, res) => {
        console.log("ctl.req.file : ", req.file)
        console.log("ctl.req.body : ", req.body)
        body = {}
        body.title = req.body.title
        body.content = req.body.content
        body.originFileName = req.body.originFileName
        body.changeName = req.file.filename
        body.originName = req.file.originalname
        const result = await ser.pageInsert.modify(body)
        fs.unlinkSync(`./upload_file/${req.body.originFileName}`)
        res.redirect(`/board/list`)
    }
}

module.exports = { views, process }