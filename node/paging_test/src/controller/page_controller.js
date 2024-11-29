const ser = require("../service/page_service")
const views = {
    index: (req, res) => {
        res.render("index")
    },
    list: async (req, res) => {
        console.log("start : ", req.query.start)
        // list = {list:list.rows, page}
        const data = await ser.pageRead.list(req.query.start)
        //console.log("list : ", list)
        console.log("list page : ", data.page)
        res.render("list", { list: data.list, page: data.page, start: data.start })
    },
    writeForm: (req, res) => {
        res.render("write_form")
    },
    content: async (req, res) => {
        const data = await ser.pageRead.content(req.params.num)
        res.render("content", { data })
    }
}

const process = {
    write: async (req, res) => {
        console.log(req.body)
        const msg = await ser.pageInsert.write(req.body)
        //res.send(msg)
        res.redirect("/page/list")
    }
}
module.exports = { views, process }