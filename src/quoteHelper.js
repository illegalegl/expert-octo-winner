let lit = require('./literals')



let getTitle= function(){
        return lit.quoteTitle;
    }
let getPrice= function(){
        return  lit.quotePrice;
    }
let  getDayChange= function(){
        return  lit.quoteDayChange;
    }
let  getAHPrice= function(){
        return  lit.quoteAfterHoursPrice;
    }
let   getAHChange= function(){
        return  lit.quoteAfterHoursDayChange;
    }
let   getLeftTable= function(){
        return  lit.summaryLeftTable;
    }
let   getRightTable= function(){
        return  lit.summaryRightTable;
    }

    export {getTitle, getPrice, getDayChange, getAHPrice, getAHChange, getLeftTable, getRightTable}
