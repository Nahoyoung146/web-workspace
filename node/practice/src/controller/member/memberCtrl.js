const ser = require("../../service/member/memberService")

const loginForm = (req, res) => {
    res.render("member/loginForm", { username: req.session.username })
}

const loginCheck = async (req, res) => {
    let pack = await ser.loginCheck(req.body)
    if (pack.result === 0) {
        req.session.username = req.body.id
    }

    res.send(pack.msg)
}

const logout = (req, res) => {
    req.session.destroy()
    res.redirect("/")
}

const list = async (req, res) => {
    if (!req.session.username) {
        return res.redirect("/member/loginForm")
    }
    let list = await ser.getList()
    res.render("member/list", { list, username: req.session.username })
}

const registerForm = async (req, res) => {
    res.render("member/registerForm", { username: req.session.username })
}

const register = async (req, res) => {
    let msg = await ser.register(req.body)
    res.send(msg)
}

const info = async (req, res) => {
    let member = await ser.getMember(req.params)
    res.render("member/info", { member, username: req.session.username })
}

const modifyForm = async (req, res) => {
    let member = await ser.getMember(req.query)
    res.render("member/modifyForm", { member, username: req.session.username })
}

const modify = async (req, res) => {
    let msg = await ser.modify(req.body)
    res.send(msg)
}

const deletem = async (req, res) => {
    let msg = await ser.deletem(req.params)
    req.session.destroy()
    res.send(msg)
}
module.exports = {
    loginForm, loginCheck, logout, list, registerForm, register, info,
    modifyForm, modify, deletem
}