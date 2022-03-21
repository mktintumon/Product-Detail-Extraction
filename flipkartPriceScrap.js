const request = require('request')
const cheerio = require('cheerio')

function flipkartScrap(url){

request(url , cb)

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
}

module.exports={
    flipkartDetail : flipkartScrap
}


