const fs = require("fs")
const views = {
    num: 1000,
    index: (req, res) => {
        res.render("file_index")
    },
    list: (req, res) => {
        // 비동기 방식
        // fs.readdir("./upload_file", (err, fileList) => {
        //     res.render("file_list", { files: fileList })
        // })
        // 동기 방식 (Sync 붙어 있으면 거의 다 동기 방식)
        const fileList = fs.readdirSync("./upload_file") //프로젝트가 기준
        res.render("file_list", { files: fileList })
    },
    download: (req, res) => {
        console.log(req.params)
        const path = `./upload_file/${req.params.fileName}`
        res.download(path)
    },
    modifyForm: (req, res) => {
        res.render("modify_form", { fileName: req.params.fileName })
    }
}

const process = {
    upload: (req, res) => {
        console.log(req.file)
        console.log("-----")
        console.log(req.body)
        console.log("req.fileValidation : ", req.fileValidation)
        if (req.fileValidation)
            res.send(req.fileValidation)
        res.send("upload 성공")
    },
    del: (req, res) => {
        fs.unlinkSync(`./upload_file/${req.params.fileName}`)
        res.redirect("/file/list")
    },
    modify: (req, res) => {
        if (req.file) {//파일이 선택되면
            console.log("새로운 파일 선택!!!!")
            return res.redirect("/file/del/" + req.body.originFileName)
        }
        res.redirect("/file/list")
    }
}

//view.index, view['index']
module.exports = { views, process }