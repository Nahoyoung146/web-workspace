const service = require("../../service/member/member_service")
const logincheck = (req, res) => {
    const mem = service.info(req.param("id"), req.param("name"))
    if (mem.length != 0)
        res.redirect("/member/list")

    else
        res.redirect("/member/login")
}

const login = (req, res) => {
    res.render("member/login")
}

const loginsu = (req, res) => {
    const list = service.list
    res.render("member/list", { mem : list })
}

const show = (req, res) => {
    const list = service.show(req.param("id"))
    console.log(list)
    res.render("member/info", { mem : list })
}

module.exports = { login, logincheck, loginsu, show }