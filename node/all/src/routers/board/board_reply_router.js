const router = require("express").Router()

const ctrl = require("../../controller/board/board_reply_ctrl")
router.post("/", ctrl.process.register)
router.get("/:groupNum",ctrl.views.data)

module.exports=router