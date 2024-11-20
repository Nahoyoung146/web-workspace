const express = require("express")
const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")

const main = (req,res) => {
    res.render("project")
}

app.get("/", main)

app.listen(5000, () => {
    console.log("port start")
})