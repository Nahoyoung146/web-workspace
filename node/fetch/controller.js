let list = [
    { id: 'aaa', pwd: 'aaa', name: 'b홍길동', addr: 'b산골짜기' },
    { id: 'bbb', pwd: 'bbb', name: 'b김개똥', addr: 'b개똥별' },
    { id: 'ccc', pwd: 'ccc', name: 'b고길똥', addr: 'b마포구' }
]
const index = (req, res) => {
    res.render("index")
}
const members = (req, res) => {
    res.json(list)
}
const reg = (req, res) => {
    const result = list.filter(mem => mem.id === req.body.id)
    if(result.length==0){
         list = list.concat(req.body)
    }
    res.json(result.length)
}
const member = (req, res) => {
    //select * f mem wh id=req.params.id
    const result = list.filter(mem => mem.id === req.params.uId)
    res.json(result[0])
}
const modify = (req, res) => {
    //update mem set pwd=:pwd ,,, wh id=:id
    list = list.filter(mem => mem.id != req.body.id)
    list = list.concat(req.body)
    res.json(1)
}
const del = (req, res) => {
    //de fr mem wh id=id
    list = list.filter(mem => mem.id != req.params.id)
    res.json(1)
}

module.exports = { index, members, reg, member, modify, del }