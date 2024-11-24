const oracleDb = require("oracledb")
const dbConfig = require("../../../config/db/dbConfig")
oracleDb.autoCommit = true
oracleDb.outFormat = oracleDb.OBJECT

const getMember = async (id) => {
    let con = await oracleDb.getConnection(dbConfig), member
    const sql = `select * from members where id='${id}'`
    try {
        member = await con.execute(sql)
    } catch (err) {
        console.log(err)
    }
    return member
}

const getList = async () => {
    let con = await oracleDb.getConnection(dbConfig),
        result = await con.execute("select * from members")
    return result
}

const register = async (body) => {
    let con = await oracleDb.getConnection(dbConfig)
    try {
        result = await con.execute("insert into members(id, pwd, name, addr) values(:id, :pwd, :name, :addr)", body)
    } catch (err) {
        console.log(err)
    }
    return result
}

const modify = async (body) => {
    let con = await oracleDb.getConnection(dbConfig)
    try {
        result = await con.execute(`update members set pwd='${body.pwd}',
            name= '${body.name}', addr='${body.addr}' where id='${body.id}'`)
    } catch (err) {
        console.log(err)
    }
    return result
}

const deletem = async (body) => {
    let con = await oracleDb.getConnection(dbConfig)
    try {
        result = await con.execute(`delete members where id='${body.id}'`)
    } catch (err) {
        console.log(err)
    }
    return result
}

module.exports = { getMember, getList, register, modify, deletem }