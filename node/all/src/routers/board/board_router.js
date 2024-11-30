const router = require("express").Router()
const ctrl = require("../../controller/board/board_ctrl")
const upload = require("../../../config/file/file_config")

router.get("/", ctrl.views.list)
router.get("/write_form", ctrl.views.writeForm)
router.post("/write", upload.single("file_name"), ctrl.process.write)
router.get("/list", ctrl.views.list)
router.get("/content/:num", ctrl.views.content)
router.get("/download/:fileName", ctrl.views.download)
router.get("/del/:fileName", ctrl.process.del)
router.get("/modify_form/:fileName", ctrl.views.modifyForm)
router.post("/modify", upload.single("newFileName"), ctrl.process.modify)

module.exports = router