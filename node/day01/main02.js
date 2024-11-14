const express = require("express")
const app = express();

// npm i ejs --save
app.set("view engine", "ejs")
app.set("views", "./")
// ./>현재위치

app.get("/", (req, res) => {
    //res.send("기본 페이지")
    res.render("index")
})

app.get("/test", (req, res) => {
    res.send("test 페이지")
})

app.listen(3000, () => console.log("3000 server"))