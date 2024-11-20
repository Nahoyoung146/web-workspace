const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")
oracledb.autoCommit = true
oracledb.outFormat = oracledb.OBJECT

const ser = require("../../service/member/member_service")
// const list = async () => {} 이게 어려우면
async function list(req, res) {
    const result = await ser.getList()
    console.log("ctrl result : ", result)
    // res.send(result)
    res.render("member/member_index", { result })
}

const regForm = (req, res) => {
    res.render("member/register_form")
}

const register = async (req, res) => {
    console.log(req.body)
    let msg = await ser.register(req.body)
    console.log("msg : ", msg)
    res.send(msg)
}

const memberView = async (req, res) => {
    console.log("param : ", req.params)
    let member = await ser.getMember(req.params)
    console.log("ctrl member : ", member)
    res.render("member/member_view", { member })
}

const modifyForm = async (req, res) => {
    console.log(req.query) // 물음표로 넘어오는 거
    const member = await ser.getMember(req.query)
    console.log("ctrl modify : ", member)
    res.render("member/modify_form", { member })
}

const deleteM = async (req, res) => {
    console.log(req.params) // /로 넘어오는 거
    let msg = await ser.deleteM(req.params)
    res.send(msg)
}

const modify = async (req, res) => {
    let msg = await ser.modify(req.body)
    res.send(msg)
}

module.exports = { list, regForm, register, memberView, modifyForm, deleteM, modify }