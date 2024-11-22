const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")
oracledb.autoCommit = true
oracledb.outFormat = oracledb.OBJECT

const getMember = async (id) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `select * from members where id='${id}'`;
    let member
    try {
        member = await con.execute(sql);
    } catch (err) {
        console.log(err)
    }
    console.log("member : ", member)
    return member
}

const getList = async () => {
    let con = await oracledb.getConnection(dbConfig);
    let result = await con.execute("select * from members");
    return result.rows;
}

const register = async (body) => {
    const sql = "insert into members(id, pwd, name, addr) values(:id, :pwd, :name, :addr)"
    let con = await oracledb.getConnection(dbConfig);
    let result = 0
    try {
        result = await con.execute(sql, body);
    } catch (err) {
        console.log(err)
    }

    return result
}

const modify = async (body) => {
    console.log("수정 : ", body)
    const sql = `update members set pwd='${body.pwd}', name= '${body.name}', 
    addr='${body.addr}' where id='${body.id}'`
    let result = 0
    try {
        let con = await oracledb.getConnection(dbConfig)
        result = await con.execute(sql)
    } catch (err) {
        console.log(err)
    }
    return result
}

const deletem = async (body) => {
    console.log("삭제 : ", body)
    const sql = `delete from members where id='${body}'`
    try {
        let con = await oracledb.getConnection(dbConfig)
        result = await con.execute(sql)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getList, getMember, register, modify, deletem }