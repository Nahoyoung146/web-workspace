const http = require("http")
const fs = require("fs")

const app = http.createServer((request, response) => {
    console.log("test", request.url)
    response.writeHead(200, {
        "content-Type": "text/html; charset=utf-8"
    })
    if (request.url === "/")
        response.end("<h1>기본 페이지 입니다.</h1>")
    else if (request.url == "/member")
        response.end(`<a href="/board">게시판</a> 회원 페이지 입니다.`)
    else if (request.url == "/board") {
        const data = fs.readFileSync("./test.html")
        response.end(data)
    }
})

app.listen(3000, () => {
    console.log("port start")
}) //실행, 포트번호 설정

//npm install supervisor --save
//npx supervisor main
//npm i express --save