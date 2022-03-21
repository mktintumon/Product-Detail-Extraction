const request = require('request')
const cheerio = require('cheerio')

function amazonScrap(url){

request(url , cb)

function cb(error, response, html) {
    if (error) {
        console.log(error)
    }
    else {
        amazon(html)
    }
}

function amazon(html) {
    let $ = cheerio.load(html)

    let prodNameArr = $('.product-title')
    let prodPriceArr = $('.lfloat.product-price')
    let prodRatingArr = $('.product-rating-count')

    for(let i=0 ; i<10 ; i++){
    let brand = $(prodNameArr[i]).text()    
    let price = $(prodPriceArr[i]).text()
    let rating = $(prodRatingArr[i]).text()

    console.log("Brand->" , brand)
    console.log("Price->" , price)
    console.log("Rating count->", rating)
    console.log("===========================================================")
    
    }

}

}

module.exports={
    amazonDetail : amazonScrap
}


