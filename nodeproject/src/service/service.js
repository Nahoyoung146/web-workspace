dao = require("../db/dao")
const getList = async () => {
    const result=await dao.getList()
    console.log("ser result : ", result)
    return result.rows
}
const update = async (body) => {
    const result = await dao.update(body)
    return result
}

module.exports={getList, update}