const dao = require("../../database/board/board_reply_dao")
const pageRead = {
    data : async (num) => {
        let result = await dao.daoRead.data(num)
        result=await pageRead.timeModify(result.rows)
        return result
    },
    timeModify: (list) => {
        console.log("time : ", list)
        list = list.map(data => {
            data['SAVE_DATE'] = data['SAVE_DATE'].toLocaleString()
            return data
        })
        return list
    }
}
const pageInsert = {
    register: async (body) => {
        const result = await dao.daoInsert.register(body)
        return result.rowsAffected
    }
}
module.exports = { pageRead, pageInsert }