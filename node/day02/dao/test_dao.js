const list = require("../db/memberDAO")
const getMember = () => {
    // list = select * from member
    // select * from member w 컬=?
    // list = [
    //     { id: "aaa", name: "a홍길동", addr: "a산골짜기" },
    //     { id: "bbb", name: "b홍길동", addr: "b산골짜기" },
    //     { id: "ccc", name: "c홍길동", addr: "c산골짜기" }
    // ]
    return list
}
module.exports = { getMember }