const express = require("express")
const memctrl = require("../../controller/member/member_controller")
const router = express.Router()
router.get("/login", memctrl.login)
router.get("/logincheck", memctrl.logincheck)
router.get("/list", memctrl.loginsu)
router.get("/info", memctrl.show)

module.exports = router