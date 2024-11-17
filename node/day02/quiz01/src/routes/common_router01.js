const express = require("express")
const comctrl = require("../controller/common_controller01")
const router = express.Router()
router.get("/", comctrl.index)
module.exports = router