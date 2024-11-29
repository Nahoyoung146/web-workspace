const router = require("express").Router()
const ctrl = require("../../controller/member/member_ctrl")

router.get("/login", ctrl.login)
router.post("/login_check", ctrl.logincheck)
router.get("/logout", ctrl.logout)
router.get("/list", ctrl.list)
router.get("/register_form", ctrl.registerform)
router.post("/register", ctrl.register)
router.get("/check", ctrl.check)
router.get("/member_view/:id", ctrl.memberview)
router.get("/modify_form", ctrl.modifyform)
router.post("/modify", ctrl.modify)
router.get("/delete/:id", ctrl.deletem)

module.exports = router