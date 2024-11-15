const express = require("express")
const m = require("./db/memberDAO")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")
const router = express.Router()
app.use("/", router);// / /test /mem /mem/info
router.get("/", (req, res) => {
    console.log("router")
    res.render("index", { mem: m })
})

const router2 = express.Router()
app.use("/member", router2);// / /test /mem /mem/info
router2.get("/list", (req, res) => {
    res.send("요청 => " + req.url)
})

// app.get("/", (req, res) => {
//     res.render("index")
// })

// 실행 : npx supervisor app01
app.listen(3000, () => console.log("3000 server app01"))