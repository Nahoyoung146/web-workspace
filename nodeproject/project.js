let flag = true
function btn() {
    console.log(flag)
    if (flag) {
        document.getElementById("main").innerHTML = "&#8618; 이 명작이 폭등할 거라고 확신해요"
        document.getElementById("btn").innerHTML = "원래대로"
    }

    else {
        document.getElementById("main").innerHTML = "&#8618; I'm sure this masterpiece will skyrocket"
        document.getElementById("btn").innerHTML = "번역"
    }

    flag = !flag
    console.log(flag)
}

const axios = require('axios');
const cheerio = require('cheerio');

function melonCrawler() {
  const URL = `https://www.melon.com/chart/`;

  axios.get(URL).then(res => {
    console.log(res.status)
    if(res.status == 200) {

      // empty array
      let crawledMusic= [];

      // res.data에 있는 tag를 cheerio로 검색하여 변수에 담기
      const $ = cheerio.load(res.data);
      const $musicList = $('#lst50');

      $musicList.each(function(i) {
        crawledMusic[i] ={
          title : $(this).find('#lst50 > td > div > div > div.ellipsis.rank01 > span > a').text().trim(),
          artist : $(this).find('#lst50 > td > div > div > div.ellipsis.rank02 > a').text(),
          img : $(this).find('#lst50 > td > div > a > img').attr('src')
        };
      });
      console.log(crawledMusic)
    } else {
      console.log("server response error")
    }
  })
}

melonCrawler()