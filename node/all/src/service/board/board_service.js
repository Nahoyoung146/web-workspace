const dao = require("../../database/board/board_dao")
const pageRead = {
    list: async (start) => {
        if (!start)
            start = 1
        start = Number(start)
        const totalCnt = await dao.daoRead.totalCnt()
        console.log("totalCnt : ", totalCnt)
        //totalCnt.rows['COUNT(*)']=10
        const num = totalCnt.rows[0]['COUNT(*)']
        console.log("num : ", num)
        const result = (num % 4 == 0) ? 0 : 1
        const page = parseInt(num / 4 + result)
        startNum = (start - 1) * 4
        let list = await dao.daoRead.list(startNum)
        list = pageRead.timeModify(list.rows)
        return { list, page, start }
    },
    writeForm: (body) => {
        console.log("body : ", body)
        let result = 0, msg = ''
        if (!body) {
            msg = `<script>alert("로그인 사용자만 접근 가능합니다.");
                        location.href = "/member/login";
                    </script>`
            result = 1
        }
        return { msg, result }
    },
    content: async (num) => {
        let data = await dao.daoRead.content(num)
        data = pageRead.timeModify(data.rows)
        console.log("ser_data : ", data)
        return data[0]
    },
    modifyForm: async (body) => {
        const data = await dao.daoRead.modifyForm(body)
        console.log("ser_data : ", data)
        return data.rows[0]
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
    write: async (body) => {
        const result = await dao.daoInsert.write(body)
    },
    del: async (body) => {
        const result = await dao.daoInsert.del(body)
    },
    modify: async (body) => {
        const result = await dao.daoInsert.modify(body)
    }
}

module.exports = { pageRead, pageInsert }