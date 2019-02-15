
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless:true})
  const page = await browser.newPage()
  
  await page.goto('https://www.relaischateaux.com/fr/france/bussiere-cote-d-or-la-bussiere-sur-ouche')
  
  
  

  

  await page.waitFor(1000)

  let prix=await page.evaluate(()=>document.getElementsByClassName("ui-state-default js-cell-loaded"))

  console.log(prix)
  //await browser.close()
})()
