const ser = require("../../service/member/member_service")

const login = (req, res) => {
    res.render("member/loginform", { username: req.session.username })
}

const logincheck = async (req, res) => {
    let pack = await ser.logincheck(req.body)
    if (pack.result === 0) {
        req.session.username = req.body.id;
    }
    res.send(pack.msg)
}

const logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

const list = async (req, res) => {
    let list = await ser.getList()
    res.render("member/list", { list, username: req.session.username })
}


const registerform = (req, res) => {
    res.render("member/registerform", { username: req.session.username })
}

const register = async (req, res) => {
    console.log("req body : ", req.body)
    let msg = await ser.register(req.body)
    console.log("msg : ", msg)
    res.send(msg)
}

const check = (req, res) => {
    if (req.session.username === undefined) {
        res.redirect("/member/login")
    }

    else {
        res.redirect("/member/list")
    }
}

const memberview = async (req, res) => {
    let member = await ser.getMember(req.params)
    res.render("member/memberview", { member, username: req.session.username })
}

const modifyform = async (req, res) => {
    const member = await ser.getMember(req.query)
    res.render("member/modifyform", { member, username: req.session.username })
}

const modify = async (req, res) => {
    let msg = await ser.modify(req.body)
    res.send(msg)
}

const deletem = async (req, res) => {
    let msg = await ser.deletem(req.params)
    res.send(msg)
}

module.exports = {
    login, logincheck, logout, list, register, registerform, check, memberview, modify,
    deletem, modifyform
}