module.exports = (app) => {
    const memberRouter = require("./member/member_router")
    app.use("/member", memberRouter)
    const router = require("express").Router()

    router.get("/", (req, res) => {
        console.log(req.session.username)
        res.render("index", { username : req.session.username })
    })

    return router
}