module.exports = (app) => {
    const router = require("express").Router()
    const ctrl = require("../controller/controller")

    router.get("/", ctrl.views.project)
    router.get("/outline", ctrl.views.outline)
    router.get("/game", ctrl.views.game)
    router.get("/chart", ctrl.views.chart)
    
    return router
}