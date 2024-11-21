const express = require("express")

const app = express()


const router = require("./src/routers/router")(app)
app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use("/", router)

app.listen(3000, () => console.log("3000 서버 실행"))