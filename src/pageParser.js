const cheerio = require('cheerio');
// const _ = require('lodash');
// var numeral = require('numeral');
const axios = require('axios');
import * as qh from './quoteHelper';

const instance = axios.create({
    baseURL: 'https://finance.yahoo.com/',
    timeout: 10000
});

const formatData = function (str) {
    return `[ ${str} ]`;
}

   let GetQuote= async function (symbol) {
        if (!symbol) {
            console.log("You can't get a Quote with this input: " + symbol);
            return;
        }

        await instance.get(`quote/${symbol}`).then(async function (response) {

            if (response.request._redirectable._redirectCount !== 0) {
                console.log('Yahoo Finance could not find the symbol: ' + symbol + ' !');
                return;
            }
            let data = GetSummaryPage(response.data);
          //  console.log("RESPONSE RIGHT HERE::: " +  JSON.stringify(data));
            return JSON.stringify(data);
        });
    }


   let GetSummaryPage= function (response) {
        const $ = cheerio.load(response);
        const title = $(qh.getTitle()).text();

        const currentPrice = $(qh.getPrice()).text();
        const dayChange = $(qh.getDayChange()).text()
        const afterHoursPrice = $(qh.getAHPrice()).text()
        const afterHoursChange = $(qh.getAHChange()).text()

        const leftTable = $(qh.getLeftTable()).map(getStats).get()[0];
        const rightTable = $(qh.getRightTable()).map(getStats).get()[0];

        let bodyObject ={
            "Title": title,
            "Price": [
                {"current": currentPrice},
                {"afterHours": afterHoursPrice}
            ],
        "Change": [
            {"day": dayChange},
            {"afterHours": afterHoursChange},
            ],
            "ValueData": leftTable,
            "ResearchData": rightTable
        };


        var labels = `\n${title} \n${formatData("Current")} | ${formatData("Day Change")} | ${formatData("After Hours")} | ${formatData("After Hours Change")}`
        var curr = `${formatData(currentPrice)}   ${formatData(dayChange)}   ${afterHoursPrice ? formatData(afterHoursPrice) : ""}   ${afterHoursChange ? formatData(afterHoursChange) : ""}`;
        console.log(labels + '\n' + curr + '\n');
        console.log(leftTable);
        console.log(rightTable);
return bodyObject;


}

const getStats = (_, stats) => {
    const json = {};
    const skipCheckColumn = ['earningsDate', 'exDividendDate', 'bid', 'ask'];
    cheerio(stats).children('tr').each((_, cell) => {
        cell = cheerio.load(cell);
        const column = cell('td:nth-child(1)').text().replace('52 Week', 'Year').replace(/\([^)]*\)|'s|&/g, '');
        let value = cell('td:nth-child(2)').text() !== 'N/A' && cell('td:nth-child(2)').text() !== 'N/A (N/A)' ? cell('td:nth-child(2)').text() : null;
        json[column] = value; //= numeral(value).value() == null || isNaN(numeral(value).value()) || skipCheckColumn.includes(column) ? value : numeral(value).value();
    })
    return json;
}

export default GetQuote
