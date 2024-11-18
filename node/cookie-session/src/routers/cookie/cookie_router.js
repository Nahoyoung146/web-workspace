// cookie_router.js
const express = require("express")
const ctrl = require("../../controller/cookie/cookie_ctrl")
const router = express.Router();
router.get("/", ctrl.index)
router.get("/popup", ctrl.popup)
router.get("/makeCookie", ctrl.makeCookie)
router.get("/cart", ctrl.cart)
router.get("/save/:goods", ctrl.save)
router.get("/view_list", ctrl.viewList)
module.exports = router;
//http://localhost:3000/cookie