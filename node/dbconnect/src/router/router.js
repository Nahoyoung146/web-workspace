module.exports = (app) => {
    const memberRouter = require("./member/member_router")
    const bodyParser = require("body-parser")
    app.use(bodyParser.urlencoded())
    app.use("/member", memberRouter)
    const router = require("express").Router()
    router.get("/", (req, res) => {
        res.render("index")
    })
    return router
}