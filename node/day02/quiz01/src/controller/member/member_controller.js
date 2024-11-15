const { query } = require("express")
const service = require("../../service/member/member_service")


const logincheck = (req, res) => {
    const mem = service.info(req.param("id"))
    if(mem.length!=0)
        res.redirect("/list")

    else
        res.redirect("/member/login")
}

const login = (req, res) => {
    res.render("member/login")
}

const loginsu = (req,res) => {
    console.log("req.param(id) => ",req.param("id"))
    const mem = service.info(req.param("id"))
    console.log(mem)
    res.render("member/list", mem)
}

module.exports = { login, logincheck, loginsu}