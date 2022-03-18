const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const fktUrl = 'https://www.flipkart.com/search?q=best+wireless+earphone&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_1_4_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_4_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=best+wireless+earphone&requestId=afb50011-401f-4ce5-af58-137eea597e8e&as-searchtext=best'
request(fktUrl , cb)

function cb(error, response, html) {
    if (error) {
        console.log(error)
    }
    else {
        flipkart(html)
    }
}

function flipkart(html) {
    let $ = cheerio.load(html)

    let prodNameArr = $('.s1Q9rs')
    let prodColorArr = $('._3Djpdu')
    let prodPriceArr = $('._30jeq3')
    let prodRatingArr = $('._3LWZlK')

    for(let i=0 ; i<8 ; i++){
    let brand = $(prodNameArr[i]).text()    
    let color = $(prodColorArr[i]).text()
    let price = $(prodPriceArr[i]).text()
    let rating = $(prodRatingArr[i]).text()

    console.log("Brand->" , brand)
    console.log("Colour->" , color)
    console.log("Price->" , price)
    console.log("Rating->", rating)
    console.log("===========================================================")
    
    }

}


