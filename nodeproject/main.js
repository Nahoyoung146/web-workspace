const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded())
const router = require("./src/router/router")(app)

app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use("/", router)

app.use("/static", express.static(__dirname))

app.listen(4000, () => console.log("4000 서버 실행"))