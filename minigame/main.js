const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const router = require("./src/router/router")(app)
app.use(bodyParser.urlencoded())


app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use("/", router)

app.use("/static", express.static(__dirname))

app.listen(4000, () => console.log("4000 서버 실행"))