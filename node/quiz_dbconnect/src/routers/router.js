module.exports = (app) => {
    const bodyPaser = require("body-parser")
    app.use(bodyPaser.urlencoded())

    const session = require("express-session")
    
    const config = require("../../config/cookie_session/cookie_session_config")
    app.use(session(config.sessionConfig))
   

    const memberRouter = require("./member/member_router")
    app.use("/member/", memberRouter)
    const router = require("express").Router()

    router.get("/", (req, res) => {
        //req.session.destroy();
        //console.log(req.cookies)
        //console.log(res.cookies)
        // console.log("router index ===> ",req.session.id)
        res.render("index", { username: req.session.id })
    })

    return router
}