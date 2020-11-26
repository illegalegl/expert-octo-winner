const pageParser = require('./pageParser');
const cheerio = require('cheerio');
const {dateToUnix, handleError, handleResponse} = require('./util');
const _ = require('lodash');
const _as = require('async');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mainStats = (info) => {
    const result = {}

}

Quote = function(symbolArray){
   // _as.each(symbolArray, (symbol)=>{
        return pageParser.GetQuote(symbolArray);
  //  })
    // await _.each(symbolArray, async function (x) {
    //     console.log(x);
    //     return pageParser.GetQuote(x);
    // });
}



rl.on("close", function () {
    console.log("\n_exit_");
    process.exit(0);
});

    let UserInput = async function () {

        let symbolArray = rl.question("Ticker Symbols ? ", async (answer)=> {
            const arr = answer.split(" ");
            return await Quote(arr);
        });
    }

export default UserInput