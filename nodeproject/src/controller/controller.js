const ser=require("../service/service")
const views = {
  project: (req, res) => {
    res.render("project")
  },
  outline: (req, res) => {
    res.render("outline")
  },
  game: async (req, res) => {
    let result = await ser.getList()
    result= result[0]
    console.log("진짜 result : ", result)
    res.render("game", { result })
  },
}
const process = {
  update: async (req, res) => {
    console.log("req.body : ", req.body)
    let result = await ser.update(req.body)
    res.redirect("/")
  }
}

module.exports = { views, process }