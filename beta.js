
const puppeteer = require('puppeteer');

let chateau = 'https://www.relaischateaux.com/fr/destinations/europe/france';
(async function main(){
	try
	{
		
		const browser=await puppeteer.launch({headless:false});
		const page =await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/67.0.3372.0 Safari/537.36');
		
		await page.goto(chateau);


	}

	catch(e){
		console.log('our error',e);

	}		
	
		


    
})();