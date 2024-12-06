const ser = require("../../service/board/board_reply_service")
const views = {
    data: async (req, res) => {
        console.log("group : ", req.params.groupNum)
        const result = await ser.pageRead.data(req.params.groupNum)
        res.json(result)
    }
}
const process = {
    register: async (req, res) => {
        console.log("req.body : ", req.body)
        const result = await ser.pageInsert.register(req.body)
        res.json(1)
    }
}
module.exports = { views, process }