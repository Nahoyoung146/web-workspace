const dao = require("../../database/member/memberDAO")
const list = dao.getMember()
const info = (id) => {
    console.log("id => ",id)
    const mem = list.filter( (v) => id === v.id)
    console.log("list -=> ", list)
    console.log(mem)
    return mem
}
module.exports = { info }