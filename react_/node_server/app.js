const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(cors())
let data_set = [
    { id: "aaa", pwd: "aaa", name: "홍길동B", addr: "산골짜기" },
    { id: "bbb", pwd: "bbb", name: "김개똥B", addr: "개똥별" },
    { id: "ccc", pwd: "ccc", name: "고길동B", addr: "마포구" }
]
app.get("/members", (req, res) => {
    //res.send("회원 목록")
    res.json(data_set)
})

app.delete("/members/:id", (req, res) => {
    console.log("back id : ", req.params)
    //delete from mem wh id=id
    data_set = data_set.filter( mem => mem.id !== req.params.id)
    res.json(1)// 성공 1, 실패 0
})
app.listen(4000, () => console.log("4000 백 서버 실행"))