const puppeteer = require('puppeteer');

let chateauURL = 'https://www.relaischateaux.com/fr/destinations/europe/france';
(async function main(){
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 926 });

    await page.goto(chateauURL);
    await page.waitForSelector('.hotelQuickView');

    const sections = await page.$$('.hotelQuickView');
    console.log(sections.length);
    for(const section of sections){
      const name = await section.$eval('h3 > a > span',span=>span.innerText);
      const restaurant= await section.$eval('span',span=>span.innerText);
      const price =  await section.$eval('.price',price=>price.innerText)
      console.log(price)
      console.log("{name:"+name+","+"type:"+restaurant+"}");

    }
})();