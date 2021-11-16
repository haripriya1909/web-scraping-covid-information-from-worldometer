const cheerio=require("cheerio");
const request=require("request");
const chalk=require("chalk");

const url="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-new-zealand-40th-match-group-2-1273751/full-scorecard";


request(url,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.log('error:', error);
    }
    else
    {
        handlehtml(html);
    }
}

function handlehtml(html)
{
    let $=cheerio.load(html);
    let arr=$(".Collapsible__contentOuter>");
    console.log($(arr[0]).text());
}