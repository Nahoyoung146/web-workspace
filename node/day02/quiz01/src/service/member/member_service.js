const dao = require("../../database/member/memberDAO")
const list = dao.getMember()
const info = (id, name) => {
    const mem = list.filter( (v) => id == v.id && name == v.name)
    return mem
}

const show = (id) => {
    const mem = list.filter( (v) => id == v.id)
    return mem
}

module.exports = { show, info, list }