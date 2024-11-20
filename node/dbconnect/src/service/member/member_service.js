dao = require("../../database/member/member_dao")

const getList = async () => {
    const result = await dao.getList()
    console.log("ser result : ", result)
    return result.rows
}

const register = async (body) => {
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