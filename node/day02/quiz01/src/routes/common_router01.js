const express=require("express")
const comctrl=require("../controller/common_controller01")
const memctrl=require("../controller/member/member_controller")
const router=express.Router()
router.get("/", comctrl.index)
router.get("/member/login", memctrl.login)
router.get("/logincheck", memctrl.logincheck)
router.get("/list", memctrl.loginsu)
module.exports = router