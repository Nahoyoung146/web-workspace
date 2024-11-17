const express = require("express")
const router = require("./src/routes/common_router01")
const router1 = require("./src/routes/member/member_router")


const app = express()
app.set("view engine", "ejs")
app.set("views", "./src/views")
app.use("/", router)
app.use("/member", router1)


app.listen(3000, () => console.log("3000 서버 실행"))