const express = require("express")
const app = express()
let con
app.get("/test", async (req, res) => {
    console.log("1. 연동 전")
    con = await connect2()
    console.log("3. 연동 완료 후 특정 기능 사용!")
    res.send("con : " + con)
})
const connect2 = () => {
    let msg
    // setTimeout(test,3000)

    return new Promise(resolve => setTimeout(() => {
        msg = "연동 되었습니다."
        console.log("2. 연동하는 중 ...")
        resolve(msg) //호출한 지역으로 리턴
    }, 1000))

    // return msg
}
app.get("/", (req, res) => {
    console.log("1. 연동 전")
    let result = connect()
    result.then(msg => {
        console.log("3. 연동 완료 후 특정 기능 사용!")
        con = msg
        res.send("con : " + con)
    })
})
const connect = () => {
    let msg
    // setTimeout(test,3000)

    return new Promise(resolve => setTimeout(() => {
        msg = "연동 되었습니다."
        console.log("2. 연동하는 중 ...")
        resolve(msg) //호출한 지역으로 리턴
    }, 1000))

    // return msg
}
const test = () => { console.log("3 초후 실행") }
app.listen(3000, () => console.log("3000연동"))