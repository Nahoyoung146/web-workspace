const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const sessionConfig = require("./config/cookie_session/cookie_session_config");
//bodyParser 미들웨어는 router에서 app전달 전에 설정해야 된다.
//그렇지 않으면 router에 연결된 곳에서 body를 사용할 수 없다
app.use(bodyParser.urlencoded());
app.use(session(sessionConfig.sessionConfig));
const router = require("./src/routers/router")(app);
app.use("/", router);

app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/public"))

app.listen(3000, () => { console.log("3000 port server"); });