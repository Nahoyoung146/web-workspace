const dao = require("../dao/test_dao")
const list = dao.getMember()
const index = () => {
    return list
}

const info = (id) => {
    const mem = list.filter( (v) => id === v.id)
    console.log("mem => ", mem)
    return mem
}

module.exports = { index, info }