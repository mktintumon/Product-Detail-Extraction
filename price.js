const amzUrl = 'https://www.amazon.in/s?k=best+wireless+earphone&crid=2UZJGPBBD5TM9&sprefix=best+wireless+earphone%2Caps%2C317&ref=nb_sb_noss_1'
const fktUrl = 'https://www.flipkart.com/search?q=best+wireless+earphone&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_1_4_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_4_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=best+wireless+earphone&requestId=afb50011-401f-4ce5-af58-137eea597e8e&as-searchtext=best'
const amazonLink = "https://www.amazon.in/";
const flipkartLink = "https://www.flipkart.com/";

const product = "best wireless earphone";

const request = require('request')
const cheerio = require('cheerio')
const puppeteer = require("puppeteer")


async function extractPrice(){
    
  try {
      let browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null,
          args: ["--start-maximized"],
        });


          //amazon
          let newTab = await browser.newPage(); 
        
          await newTab.goto(amazonLink)

          await newTab.waitForSelector('#twotabsearchtextbox')

          await newTab.type('#twotabsearchtextbox', product , {delay:100})
          await newTab.click('#nav-search-submit-button')

          console.log('AMAZON PRODUCTS')
          console.log('````````````````````````')
          request(amzUrl , cb1)

          //flipkart 
          let newtab2 = await browser.newPage()

          await newtab2.goto(flipkartLink)

          await newtab2.click('._2KpZ6l._2doB4z')

          await newtab2.waitForSelector('._3704LK')

          await newtab2.type('._3704LK' , product , {delay:100} )

          await newtab2.click('.L0Z3Pu')    
          
          console.log('FLIPKART PRODUCTS')
          console.log('````````````````````````')
          request(fktUrl , cb2)

          await browser.close()



    } catch (error) {
        
        console.log(error)
    } 
    

}

extractPrice()

//request(amzUrl , cb1)

function cb1(error, response, html) {
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
   

    for(let i=0 ; i<8 ; i++){
    let brand = $(prodNameArr[i]).text()    
    let price = $(prodPriceArr[i]).text()
    let rating = $(prodRatingArr[i]).text()

    console.log("Brand->" , brand)
    console.log("Price->" , price)
    console.log("Rating->", rating)
    console.log("=====================================================================================")
    
    }

}

//request(fktUrl , cb2)

function cb2(error, response, html) {
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
    console.log("=====================================================================================")
    
    }
}



function dirCreatoer(folderPath){
    if(fs.existsSync(folderPath) == false){
        fs.mkdirSync(folderPath)
    }
 }


