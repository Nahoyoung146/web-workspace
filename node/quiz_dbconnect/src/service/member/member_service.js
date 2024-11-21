const dao = require("../../database/member/member_dao")

const getList = async () => {
    const result = await dao.getList()
    console.log("ser result : ", result)
    return result.rows
}

module.exports = { getList }