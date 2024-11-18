const cookieConfig = { //  쿠키 설정
    httpOnly: true,
    maxAge: 5000, // 지속시간
    // path: "/",
    signed: true //암호화
}

module.exports = { cookieConfig }