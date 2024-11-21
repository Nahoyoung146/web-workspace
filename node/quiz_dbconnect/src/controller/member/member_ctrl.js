const ser = require("../../service/member/member_service")

const loginform = (req, res) => {
    console.log("login form : ", req.session)
    res.render("member/loginform")
}

const logincheck = async (req, res) => {
    const result = await ser.getList()
    console.log("result : ", result)
    //console.log(req.body)
    let msg = "<script>"
    for (let i = 0; i < result.length; i++) {
        //console.log(result[i].ID)
        // console.log(req.body.id)
        if (result[i].ID === req.body.id) {
            console.log("확인")
            if (result[i].PWD === req.body.pwd) {
                console.log("확인")
                res.cookie("isLogin", true);
                req.session.id = result[i].ID
                msg += `alert("${result[i].NAME}님 환영합니다^^");`
                break;
            }

            else {
                msg += `alert("비밀번호가 틀렸습니다!!!");`
                break;
            }
        }

        else if (i == result.length - 1) {
            msg += `alert("존재하지 않는 id입니다!!");`
        }
    }
    msg += `location.href="/"; </script>`
    res.send(msg)
}

const logout = (req, res) => {
    //console.log("logout -> :", req.session)
    //req.session.id = null;
    //req.session.destroy();
    //console.log("logout -> :", req.session)
    res.clearCookie('isLogin')
    res.redirect('/');
}

const list = (req, res) => {
    
}

module.exports = { loginform, logincheck, logout, list}