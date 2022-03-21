const puppeteer = require("puppeteer")

const args = process.argv.slice(2)
const product = args[0]

const amazonLink = "https://www.amazon.in/";
const flipkartLink = "https://www.flipkart.com/";
const ap = require('./amazonPriceScrap')
const fp = require('./flipkartPriceScrap')


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

          const url1 = await newTab.url()

          console.log('------------------------AMAZON PRODUCT DETAILS-------------------------------')
          console.log('`````````````````````````````````````````````````````````````````````````````')
          
          ap.amazonDetail(url1)

          await newTab.waitForTimeout(4000)


          //flipkart 
          let newtab2 = await browser.newPage()

          await newtab2.goto(flipkartLink)

          await newtab2.click('._2KpZ6l._2doB4z')

          await newtab2.waitForSelector('._3704LK')

          await newtab2.type('._3704LK' , product , {delay:100} )

          await newtab2.click('.L0Z3Pu')    

          const url2 = await newtab2.url()
          
          console.log('-------------------FLIPKART PRODUCTS DETAILS--------------------------------')
          console.log('````````````````````````````````````````````````````````````````````````````')
          
          fp.flipkartDetail(url2)

          await newtab2.waitForTimeout(4000);

          await browser.close()

    } catch (error) {
        
        console.log(error)
    } 
    

}

extractPrice()


