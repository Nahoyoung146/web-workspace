const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")
oracledb.autoCommit = true
oracledb.outFormat = oracledb.OBJECT

const getList = async () => {
    let con = await oracledb.getConnection(dbConfig);
    let result = await con.execute("select * from members")
    con.close()
    return result
}

const register = async (body) => {
    console.log("body : ", body)
    const sql = "insert into members(id, pwd, name, addr) values(:id, :pwd, :name, :addr)"
    let con = await oracledb.getConnection(dbConfig);
    let result = 0;
    try {
        result = await con.execute(sql, body);
    } catch (err) {
        console.log(err)
    }

    console.log("result : ", result)
    return result
}

const getMember = async (mId) => {
    const sql = `select * from members where id=:id`
    let con = await oracledb.getConnection(dbConfig)
    let member
    try {
        // member = await con.execute(`select * from members where id='${mId.id}'`)
        member = await con.execute(sql, mId)
        console.log("dao member : ", member)
    } catch (err) {
        console.log(err)
    }
    return member.rows[0]
}

const deleteM = async (username) => { // {id : aaa}
    const sql = `delete from members where id='${username}'`
    let result = 0
    try {
        let con = await oracledb.getConnection(dbConfig)
        result = await con.execute(sql)
    } catch (err) {
        console.log(err)
    }
}

const modify = async (body) => {
    console.log("------------------------->", body.pwd)
    const sql = `update members set pwd='${body.pwd}', 
    addr='${body.addr}', name='${body.name}' where id='${body.id}'`
    //const member = getMember( id );
    //let addr = "";
    //if(body.addr != member.addr ){ addr="addr="+body.addr }
    //sql += addr; //`update members set addr=변경주소`
    let result = 0
    try {
        let con = await oracledb.getConnection(dbConfig)
        result = await con.execute(sql)
    } catch (err) {
        console.log(err)
    }
    return result
}
module.exports = { getList, register, getMember, deleteM, modify }