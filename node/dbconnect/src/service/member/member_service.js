const dao = require("../../database/member/member_dao")
const bcrypt = require("bcrypt")
const getList = async () => {
    const pwd = "test"
    const changePwd = bcrypt.hashSync(pwd, 10) // 숫자가 높을수록 암호화가 더 자세히 된다.
    console.log("============================")
    console.log("pwd : ", pwd)
    console.log("changePwd : ", changePwd)
    console.log("changePwd : ", bcrypt.compareSync(pwd, changePwd)) //일반평문과 암호화된 문자를 비교
    const result = await dao.getList()
    console.log("ser result : ", result)
    return result.rows
}

const register = async (body) => {
    console.log("body : ", body)
    body.pwd = bcrypt.hashSync(body.pwd,10)
    console.log("ser body : ",body)
    const result = await dao.register(body)
    console.log("ser result : ", result)
    let msg = " ", url = " "
    if (result != 0) { //성공 저장
        msg = "회원가입 성공"
        url = "/member/list"
    } else { // 실패
        msg = "문제 발생!!!!"
        url = "/member/register_form"
    }
    return getMessage(msg, url)
}

const getMessage = (msg, url) => {
    return `<script>alert("${msg}");location.href="${url}";</script>`
}

const getMember = async (mId) => {
    const result = await dao.getMember(mId)
    return dao.getMember(mId)
}

const deleteM = async (body) => {
    const result = await dao.deleteM(body.id)
    let msg = " ", url = " "
    if (result != 0) { //삭제
        msg = "삭제되었음!!!"
        url = "/member/list"
    } else { // 실패
        msg = "문제 발생!!!!"
        // url = "/member/member_view/" + body.id
        url = `/member/member_view/${body.id}`
    }
    return getMessage(msg, url)
}

const modify = async (body) => {
    let result = await dao.modify(body)
    if (result != 0) { //수정 성공
        msg = "수정되었음!!!"
        url = `/member/member_view/${body.id}`
    } else { // 실패
        msg = "문제 발생!!!!"
        // url = "/member/member_view/" + body.id
        url = `/member/modify_form?id=${body.id}`
    }
    return getMessage(msg, url)
}
module.exports = { getList, register, getMember, deleteM, modify }