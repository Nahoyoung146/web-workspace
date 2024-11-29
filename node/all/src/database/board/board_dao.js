const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")
const { modifyform } = require("../../controller/member/member_ctrl")
oracledb.outFormat = oracledb.OBJECT
oracledb.autoCommit = true
const daoRead = {
    list: async (start) => {
        const sql = `select * from board order by write_no desc offset ${start} rows fetch next 4 rows only`
        const con = await oracledb.getConnection(dbConfig)
        const result = await con.execute(sql)
        return result
    },
    totalCnt: async () => {
        try {
            const con = await oracledb.getConnection(dbConfig)
            cnt = await con.execute(`select count(*) from board`)
        } catch (err) {
            console.log(err)
        }
        return cnt
    },
    content: async (num) => {
        const sql = `select * from board where WRITE_NO = ${num}`
        let data
        try {
            const con = await oracledb.getConnection(dbConfig)
            data = await con.execute(sql)
            daoUpate.hit(num)
        } catch (err) {
            console.log(err)
        }
        return data
    },
    modifyForm: async (body) => {
        const sql = `select * from board where change_file_name='${body}'`
        let data
        try {
            const con = await oracledb.getConnection(dbConfig)
            data = await con.execute(sql)
        } catch (err) {
            console.log(err)
        }
        return data
    }
}
const daoUpate = {
    hit: async (num) => {
        const con = await oracledb.getConnection(dbConfig)
        const sql = `update board set HIT = HIT + 1 where write_no=${num}`
        con.execute(sql)
    }
}
const daoInsert = {
    write: async (body) => {
        console.log("body : ", body)
        const con = await oracledb.getConnection(dbConfig)
        const sql = `insert into board(WRITE_NO, TITLE, CONTENT, SAVE_DATE, ORIGIN_FILE_NAME, CHANGE_FILE_NAME, ID) values(board_seq.nextval, :title, :content, sysdate, :originalname, :filename, :id)`
        let result = 0
        try {
            result = await con.execute(sql, body)
        } catch (err) {
            console.log(err)
        }
    },
    del: async (body) => {
        console.log(body)
        const con = await oracledb.getConnection(dbConfig)
        const sql = `delete from board where change_file_name='${body}'`
        console.log("sql : ", sql)
        let result = 0
        try {
            result = await con.execute(sql)
        } catch (err) {
            console.log(err)
        }
    },
    modify: async (body) => {
        console.log("dao.body : ", body)
        const con = await oracledb.getConnection(dbConfig)
        const sql = `update board set TITLE='${body.title}', CONTENT= '${body.content}', SAVE_DATE=sysdate, ORIGIN_FILE_NAME='${body.originName}',
        CHANGE_FILE_NAME='${body.changeName}' where change_file_name='${body.originFileName}'`
        let result = 0
        try {
            result = await con.execute(sql)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = { daoRead, daoInsert }