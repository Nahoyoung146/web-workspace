const dao = require("../../database/member/member_dao")

const logincheck = async (body) => {
    let result = await dao.getMember(body.id)
    console.log("result : ", result)
    console.log(body)
    let pack = {}, msg = "", url = ""
    if (result.rows.length == 1) {
        if (result.rows[0].PWD === body.pwd) {
            msg = `${result.rows[0].NAME}님 환영합니다^^`
            url = "/"
            pack.result = 0
        }

        else {
            msg = "비밀번호가 틀렸습니다!!!"
            url = "/member/login"
            pack.result = 1
        }
    }

    else {
        msg = "존재하지 않는 아이디입니다!!"
        url = "/member/login"
        pack.result = 1
    }
    pack.msg = getMessage(msg, url)
    return pack
}

const getList = async () => {
    let list = await dao.getList()
    return list
}

const register = async (body) => {
    const result = await dao.register(body)
    let msg = "", url = ""
    if (result != 0) {
        msg = "회원가입 성공"
        url = "/member/list"
    } else {
        msg = "문제 발생!!!!"
        url = "/member/register_form"
    }
    return getMessage(msg, url)
}

const getMessage = (msg, url) => {
    return `<script>
                alert("${msg}")
                location.href="${url}"
    </script>`
}

const getMember = async (id) => {
    const result = await dao.getMember(id.id)
    return result.rows[0]
}

const modify = async (body) => {
    let result = await dao.modify(body)
    if (result != 0) {
        msg = "수정되었음!!!"
        url = `/member/member_view/${body.id}`
    } else {
        msg = "문제 발생!!!"
        url = `/member/modify_form?id=${body.id}`
    }
    return getMessage(msg, url)
}

const deletem = async (body) => {
    let result = await dao.deletem(body.id)
    if (result != 0) {
        msg = "삭제되었음!!!"
        url = "/member/list"
    } else {
        msg = "문제 발생!!!"
        url = `/member/member_view/${body.id}`
    }
    return getMessage(msg, url)
}

module.exports = { logincheck, getList, register, getMember, modify, deletem }