const router = require("express").Router()
const ctrl = require("../../controller/member/member_ctrl")

router.get("/login_form", ctrl.loginform)
router.post("/login", ctrl.logincheck)
router.get("/logout", ctrl.logout)
router.get("/list", ctrl.list)

module.exports = router