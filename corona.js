const request=require("request");
const cheerio=require("cheerio");
const chalk=require("chalk");
const { gray } = require("chalk");
// console.log("hello");
request('https://www.worldometers.info/coronavirus/', cb);
function cb(error, response, html) {
    if(error)
    {
        console.error('error:', error); // Print the error if one occurred
    }
    else
    {
        // console.log('html:', HTML); // Print the HTML for the Google homepage.
        handlehtml(html);
    }
  }

  function handlehtml(html){
    let seltool=cheerio.load(html);
    let array=seltool(".maincounter-number span");
    //[i] -> wrap seltool
    // for(let i=0;i<array.length;i++)
    // {
    //     let data=seltool(array[i]).text();
    //     console.log(chalk.red(data));
    // }
    console.log(chalk.grey("Covid cases: ") , chalk.blueBright(seltool(array[0]).text()));
    console.log(chalk.grey("Deaths: ") , chalk.redBright(seltool(array[1]).text()));
    console.log(chalk.grey("Recovered: ") , chalk.greenBright(seltool(array[2]).text()));
  }
  