const oracledb = require("oracledb")
const dbConfig = require("../config/dbconfig")
oracledb.autoCommit=true
oracledb.outFormat=oracledb.OBJECT

const getList = async () => {
    let con = await oracledb.getConnection(dbConfig)
    let result = await con.execute("select * from test")
    return result
}

const update = async () => {

}

module.exports={getList,update}