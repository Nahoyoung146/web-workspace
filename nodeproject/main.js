const express = require("express")
const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")

const main = (req, res) => {
    res.render("project")
}

const game = (req, res) => {
    res.render("game")
}

const outline = (req, res) => {
    res.render("outline")
}
app.get("/", main)
app.get("/game", game)
app.get("/outline", outline)

app.listen(5000, () => {
    console.log("port start")
})