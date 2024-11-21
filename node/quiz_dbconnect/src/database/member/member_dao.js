const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")
oracledb.autoCommit = true
oracledb.outFormat = oracledb.OBJECT

const getList = async () => {
    let con = await oracledb.getConnection(dbConfig)
    let result = await con.execute("select * from members")
    con.close()
    return result
}

module.exports = { getList }