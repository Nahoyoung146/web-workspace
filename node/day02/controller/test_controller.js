const { query } = require("express")
const service = require("../service/test_service")
const index = (req, res) => {
    const list = service.index()
    console.log("list => ", list)
    // res.send("ctrl 연동")
    res.render("index", { mem: list })
}
const test = (req, res) => {
    console.log("ctrl test 연동")
    res.render("test")
}

const info = (req, res) => {
    const mem = service.info(req.param("id"))
    // res.send("ctrl test 연동 : " + req.param("id"))
    res.render("info", { mem })
}

const test2 = (req, res) => {
    const mem = service.info(req.param("id"))
    console.log(mem)
    console.log("------- test2 컨트롤러 -------")
    console.log("req.param.id =>", req.param("id"))
    console.log("req,query =>", req.query)
    console.log("req,query =>", req.query.id)
    console.log("req,query =>", req.query["name"])
    // res.send("test2 연동")
    if(req.query.id == "aaa"){
        res.redirect("/")
    }
    else{
        res.redirect("/test1")
    }
}


module.exports = { test2, index: index, test, info }
//exports로 내보낼 수 있는 기능은 하나만 가능