const router = require("express").Router()
const ctrl = require("../../controller/member/memberCtrl")

router.get("/loginForm", ctrl.loginForm)
router.post("/loginCheck", ctrl.loginCheck)
router.get("/logout", ctrl.logout)
router.get("/list", ctrl.list)
router.get("/registerForm", ctrl.registerForm)
router.post("/register", ctrl.register)
router.get("/info/:id", ctrl.info)
router.get("/modifyForm", ctrl.modifyForm)
router.post("/modify", ctrl.modify)
router.get("/delete/:id", ctrl.deletem)

module.exports = router