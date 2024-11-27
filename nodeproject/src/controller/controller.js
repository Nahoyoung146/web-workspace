const axios = require("axios");
const cheerio = require("cheerio");
const views = {
    project : (req, res) => {
        res.render("project")
    },
    outline : (req, res) => {
        res.render("outline")
    },
    game : (req, res) => {
        res.render("game")
    },
    chart : async (req, res) => {
        try{
        const html = await axios.get("https://www.genie.co.kr/chart/top200");
        let ulList = [];
        // 2
        const $ = cheerio.load(html.data);
        // 3
        const bodyList = $("tr.list");
        bodyList.map((i, element) => {
          ulList[i] = {
            rank: i + 1,
            // 4
            title: $(element).find("td.info a.title").text().replace(/\s/g, ""),
            artist: $(element).find("td.info a.artist").text().replace(/\s/g, ""),
          };
        });
        console.log("bodyList : ", ulList);
      } catch (error) {
        console.error(error);
      }
    }
}

module.exports = { views }