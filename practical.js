const cheerio = require("cheerio");
const request = require("request");
// const chalk = require("chalk");

// const url = "https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897?ex_cid=t20worldcup2021:google_cpc:search:branddesktop_feed:msn&gclid=EAIaIQobChMIgfiLuKiI9AIVGg4rCh3ZcQJeEAAYASAAEgJ8vvD_BwE"
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";

request(url, cb);

function cb(error, response, html) {
    if (error) {
        console.log('error:', error);
    }
    else {
        // handlehtml(html);
        console.log(html);
    }
}

function handlehtml(html) {
    let $ = cheerio.load(html);
    let arr1=$(".d-flex.match-comment-padder.align-items-center .match-comment-long-text p");
    // let arr = $(".team.name-detail.name-link.name");
    // let htmldata=$(arr1[0]).html();
    let data = $(arr1[0]).text();
    console.log(data);
}