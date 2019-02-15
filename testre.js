
const puppeteer = require('puppeteer');
var fs = require("fs");
var colors = require('colors');


function ecrire(fileContent)
{
	fs.writeFile("./sample.json", fileContent, (err) => {
    	if (err)
    	 {
        	console.error(err);
        	return;
    	};
   		 console.log("File has been created");
		});
}

let url = 'https://www.relaischateaux.com/fr/site-map/etablissements';
(async function main()
{
	
	
		
		const browser=await puppeteer.launch({headless:false});
		const page =await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/67.0.3372.0 Safari/537.36');
		
		await page.goto('https://www.relaischateaux.com/fr/france/brittany-finistere-roscoff');
		await page.waitFor(500);
    await page.setViewport({ width: 1280, height: 720 })


    await page.waitForSelector('.jsSecondNav > .jsSecondNavMain > li:nth-child(2) > a > span')
    await page.click('.jsSecondNav > .jsSecondNavMain > li:nth-child(2) > a > span')
    await page.waitFor(500)

    /*
    if(await page.evaluate(()=>document.getElementsByClassName('jsSecondNavSub').length==0))
    {
      console.log("MBAPPE")
      let nomrestaurant=await page.evaluate(()=>document.getElementsByClassName('mainTitle2 noVerticalMargin')[0].innerText)
      console.log("restau :"+nomrestaurant)
    }
    else
    { 
      console.log("NEYMAR")
      await page.waitFor(2000)
      let nomrestaurant1=await page.evaluate(()=>document.getElementsByClassName('mainTitle2 noVerticalMargin')[1].innerText)
      console.log("restau1 :"+nomrestaurant1)
      await page.waitForSelector('.hotel > .jsSecondNav > .jsSecondNavSub > li:nth-child(2) > a')
      await page.click('.jsSecondNavSub > li:nth-child(2) > a')
      await page.setViewport({ width: 1280, height: 720 })
      await page.waitFor(3000)
      let nomrestaurant2=await page.evaluate(()=>document.getElementsByClassName('mainTitle2 noVerticalMargin other-restaurant-title')[0].innerText)
      console.log("restau2 :"+nomrestaurant2)
    }

    */

    if(await page.evaluate(()=>document.getElementsByClassName('jsSecondNavSub').length==0))
    {
      const anne=await page.$$('div > div.row.hotelTabsHeader > div:nth-child(1) > div.hotelTabsHeaderTitle')
      let restau=await anne[0].$eval('h3',(h3)=>h3.innerText)
      console.log(anne.length)
      if(restau=="")
      {
        restau=await anne[1].$eval('h3',(h3)=>h3.innerText)
      }
      
      console.log("restau :"+restau)
    } 

    else
    {
      console.log("NEYMAR")

      const anne=await page.$$('div > div.row.hotelTabsHeader > div:nth-child(1) > div.hotelTabsHeaderTitle')
      console.log(anne.length)

      let restau1=await anne[0].$eval('h3',(h3)=>h3.innerText)
      if(restau1=="")
      {
        restau1=await anne[1].$eval('h3',(h3)=>h3.innerText)
      }
      console.log("restau 1 : "+restau1)
      await page.waitForSelector('.hotel > .jsSecondNav > .jsSecondNavSub > li:nth-child(2) > a')
      await page.click('.jsSecondNavSub > li:nth-child(2) > a')
      await page.setViewport({ width: 1280, height: 720 })
      await page.waitFor(4000)
      const anne2=await page.$$('div > div > div:nth-child(1) > div.col-1-1.collapse-xs > div > div.col-1-1.collapse-xs > div.hotelTabsHeaderTitle')
      console.log(anne2.length)
      let restau2=await anne2[anne2.length-1].$eval('h3',(h3)=>h3.innerText)
      console.log("restau 2 : "+restau2)
    }




    
})();