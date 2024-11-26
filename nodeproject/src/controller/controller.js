const fs = require("fs")
const views = {
    project : (req, res) => {
        res.render("project")
    },
    outline : (req, res) => {
        res.render("outline")
    },
    game : (req, res) => {
        res.render("game")
    }
}

module.exports = { views }