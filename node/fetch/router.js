module.exports = (app) => {
    const ctrl = require("./controller")
    const router = require("express").Router()

    router.get("/index", ctrl.index)
    router.get("/members", ctrl.members)
    router.post("/members", ctrl.reg)
    router.get("/members/:uId", ctrl.member)
    router.put("/members", ctrl.modify)
    router.delete("/members/:id", ctrl.del)
    router.get("/register_view", (req, res) => {
        res.render("register_view")
    })
    router.get("/view_member", (req, res) => {
        res.render("view_member")
    })
    return router
}