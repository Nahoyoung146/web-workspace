const con = require("../dbcommon")
const daoRead = {
    data : async (num) => {
        const sql = `select * from reply where write_group=${num}`
        const result = await (await con).execute(sql)
        return result
    }
}
const daoInsert = {
    register: async (body) => {
        const sql = `insert into reply(ID, TITLE, CONTENT, WRITE_GROUP) values(:id, :title, :content, :write_no)`
        let result=0
        result = await (await con).execute(sql, body)
        console.log(result)
        return result
    }
}
module.exports = { daoRead, daoInsert }