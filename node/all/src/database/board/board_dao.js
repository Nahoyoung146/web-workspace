const con = require("../dbcommon")
const daoRead = {
    list: async (start) => {
        const sql = `select * from board order by write_no desc offset ${start} rows fetch next 4 rows only`
        const result = (await con).execute(sql)
        return result
    },
    totalCnt: async () => {
        try {
            cnt = (await con).execute(`select count(*) from board`)
        } catch (err) {
            console.log(err)
        }
        return cnt
    },
    content: async (num) => {
        const sql = `select * from board where WRITE_NO = ${num}`
        let data
        try {
            data = (await con).execute(sql)
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
            data = (await con).execute(sql)
        } catch (err) {
            console.log(err)
        }
        return data
    }
}
const daoUpate = {
    hit: async (num) => {
        const sql = `update board set HIT = HIT + 1 where write_no=${num}`;
        (await con).execute(sql)
    }
}
const daoInsert = {
    write: async (body) => {
        console.log("body : ", body)
        const sql = `insert into board(WRITE_NO, TITLE, CONTENT, ORIGIN_FILE_NAME, CHANGE_FILE_NAME, ID) values(board_seq.nextval, :title, :content, :originalname, :filename, :id)`
        let result = 0
        try {
            result = (await con).execute(sql, body)
        } catch (err) {
            console.log(err)
        }
    },
    del: async (body) => {
        console.log(body)
        const sql = `delete from board where change_file_name='${body}'`
        console.log("sql : ", sql)
        let result = 0
        try {
            result = (await con).execute(sql)
        } catch (err) {
            console.log(err)
        }
    },
    modify: async (body) => {
        console.log("dao.body : ", body)
        const sql = `update board set TITLE='${body.title}', CONTENT= '${body.content}', SAVE_DATE=sysdate, ORIGIN_FILE_NAME='${body.originName}',
        CHANGE_FILE_NAME='${body.changeName}' where change_file_name='${body.originFileName}'`
        let result = 0
        try {
            result = (await con).execute(sql)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = { daoRead, daoInsert }