module.exports = (app) => {
    const memberRouter = require("./member/member_router")
    app.use("/member", memberRouter)
    const boardRouter = require("./board/board_router")
    app.use("/board", boardRouter)
    const boardRepRouter =  require("./board/board_reply_router")
    app.use("/board_rep", boardRepRouter)
    const router = require("express").Router()

    router.get("/", (req, res) => {
        console.log("실행!!!!")
        console.log("req.session.username : ", req.session.username)
        res.render("index", { username: req.session.username })
    })

    return router
}