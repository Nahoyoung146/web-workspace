const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const router = require("./src/router/router")(app)
app.use(bodyParser.urlencoded())

app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use("/",router)


app.listen(3000, () => console.log("3000 서버 실행"))