module.exports = (app) => {
    const router = require("express").Router()
    const ctrl = require("../controller/controller")

    router.get("/", ctrl.views.project)
    router.get("/game", ctrl.views.game)
    router.post("/update", ctrl.process.update)
    router.get("/info", ctrl.views.info)
    router.get("/shop", ctrl.views.shop)
    
    return router
}