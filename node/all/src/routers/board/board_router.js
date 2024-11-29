const router = require("express").Router()
const ctrl = require("../../controller/board/board_ctrl")
const multer = require("multer")

const stg = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("req.body : ", req.body)
        console.log("file : ", file)
        console.log("cb : ", cb)
        cb(null, "upload_file")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
const f_filter = (req, file, cb) => {
    const type = file.mimetype.split("/")
    if (type[0] == 'image') {
        cb(null, true)
    }
    else {
        req.fileValidation = "이미지만 저장하세요!!!"
        cb(null, false)
    }
}
const upload = multer({ storage: stg, fileFilter: f_filter })

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