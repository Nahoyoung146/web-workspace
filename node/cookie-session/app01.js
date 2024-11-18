const express = require("express")
const cookieRouter = require("../cookie-session/src/routers/cookie/cookie_router")
const cookieParser = require("cookie-parser")
const app = express();
app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use(cookieParser("아무값이나")) //쿠키 설정은 경로설정보다 위에 작성, 설정경로보다 아래에 작성하면 적용 안됨
app.use("/cookie", cookieRouter)

app.listen(3000, () => console.log("3000 서버 실행"))