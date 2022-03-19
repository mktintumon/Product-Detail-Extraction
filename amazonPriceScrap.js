const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.amazon.in/s?k=best+wireless+earphone&crid=2UZJGPBBD5TM9&sprefix=best+wireless+earphone%2Caps%2C317&ref=nb_sb_noss_1'

function amazonScrap(){

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

    let prodNameArr = $('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 .a-size-medium.a-color-base.a-text-normal')
    let prodPriceArr = $('.a-price-whole')
    let prodRatingArr = $('.a-row.a-size-small span a i span')

    for(let i=0 ; i<10 ; i++){
    let brand = $(prodNameArr[i]).text()    
    let price = $(prodPriceArr[i]).text()
    let rating = $(prodRatingArr[i]).text()

    console.log("Brand->" , brand)
    console.log("Price->" , price)
    console.log("Rating->", rating)
    console.log("===========================================================")
    
    }

}

}

module.exports={
    amazonDetail : amazonScrap
}


