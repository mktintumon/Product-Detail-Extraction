const puppeteer = require("puppeteer")

const args = process.argv.slice(2)
const product = args[0]

const snapdealLink = "https://www.snapdeal.com/";
const flipkartLink = "https://www.flipkart.com/";
const ap = require('./snapdealPriceScrap')
const fp = require('./flipkartPriceScrap')


async function extractPrice(){
    
  try {
      let browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null,
          args: ["--start-maximized"],
        });


          //snapdeal automation
          let newTab = await browser.newPage(); 
        
          await newTab.goto(snapdealLink)

          await newTab.waitForSelector('input[id="inputValEnter"]')

          await newTab.type('input[id="inputValEnter"]', product , {delay:100})
          await newTab.click('.searchTextSpan')

          await newTab.waitForNavigation(newTab.url())

          const url1 = await newTab.url()

          console.log('------------------------SNAPDEAL PRODUCT DETAILS-------------------------------')
          console.log('`````````````````````````````````````````````````````````````````````````````')
          
          ap.amazonDetail(url1)

          await newTab.waitForTimeout(1000)


          //flipkart automation
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

          await newtab2.waitForTimeout(2000);

          console.log('*********HAPPY SHOPPING************')

          await browser.close()

    } catch (error) {
        
        console.log(error)
    } 
    

}

extractPrice()


