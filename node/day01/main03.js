const express = require("express")
const app = express();

// npm i ejs --save
app.set("view engine", "ejs")
app.set("views", "./views")
// ./>현재위치

app.get("/", (req, res) => {
    // console.log("기본 페이지")
    // res.render("index" , {key : "값"})
    const name = "홍길동"
    //c[key1], c[key4][k1]
    const context = {
        key1: "값1",
        key2: "값2",
        key3: [10, 20, 30],
        key4: { k1: "k", k2: "kk" }
    }
    const arr = [10, 20, 30]
    res.render("index", { key: "값", n: name, arr, c: context })
    //키와 값의 이름이 값으면 둘 중 하나 생략 가능
})

app.get("/member", (req, res) => {
    context = {
        arr: ['홍길동', '20살', '산골짜기'],
        obj: { 'name': '김개똥', 'age': '30살', 'addr': '개똥별' },
        name: '고길동', 'age': '40살', 'addr': '마포구'
    }
    res.render("member", { context });
});

app.get("/login", (req, res) => {
    // console.log("기본 페이지")
    res.render("login")
})

app.get("/logout", (req, res) => {
    // console.log("기본 페이지")
    res.render("logout")
})

app.get("/for", (req, res) => {
    res.render("for", { arr: [111, 222, 333] })
})

app.get("/for_quiz", (req, res) => {
    context = {
        "rank": [
            [1, 2, 3, 4, 5],
            ["육", "7", "팔", "구", "10"],
            [11, 12, 13, 14, 15]
        ]
    }
    res.render("for_quiz", context)
})

app.get("/if", (req, res) => {
    res.render("if", { num: 60 })
})

app.listen(3000, () => console.log("3000 server"))