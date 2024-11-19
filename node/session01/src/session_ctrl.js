const index = (req, res) => {
    req.session.name = "홍길동"
    req.session.age = 20
    res.render("set_session");
}


const getSession = (req, res) => {
    console.log(req.session.name)
    const sessionValue = {
        name: req.session.name,
        age: req.session.age
    }
    // res.send("getSession")
    res.render("get_session", sessionValue)
}

const delSession = (req, res) => {
    // delete req.session.name //하나의 세션 삭제
    req.session.destroy() //모든 세션 종료
    const msg = `<script>
    alert("세션 삭제")
    location.href = "/session/get_session"
    </script>`
    res.send(msg)
}

const loginForm = (req, res) => {
    res.render("login", { username: req.session.username })
}

const loginCheck = (req, res) => {
    console.log(req.query.id)
    console.log(req.query.pwd)
    console.log(req.body)
    console.log(req.body.id)
    console.log(req.body.pwd)
    const dbId = "aaa", dbPwd = "111", dbName = "홍길동"
    let msg = "<script>"
    if (req.body.id === dbId) { // id 일치
        if (req.body.pwd == dbPwd) { // 인증 통과
            req.session.username = dbId
            req.session.name = dbName
            return res.redirect("/session/main")
        } else { // 비번 틀림
            msg += `alert("비번틀림");`
        }
    }
    else { // 존재하지 않은 id
        msg += `alert("존재하지 않는 id");`
    }
    msg += `location.href="/session/login"; </script>`
    res.send(msg)
}

const main = (req, res) => {
    if (req.session.username === undefined) {
        //res.redirect("/session/login")
        const msg = `<script>
        alert("로그인 먼저 하세요");
        location.href = "/session/login";
        </script>`
        res.send(msg)
    } else {
        res.render("main", { nick: req.session.name })
    }
}

const logout = (req, res) => {
    req.session.destroy()
    res.redirect("/session/login")
}


module.exports = { index, getSession, delSession, loginForm, loginCheck, main, logout }