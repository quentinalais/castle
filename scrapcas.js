
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
(async function main(){
	try
	{
		
		const browser=await puppeteer.launch({headless:false});
		const page =await browser.newPage();
		page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/67.0.3372.0 Safari/537.36');
		
		await page.goto(url);
		await page.waitFor(3000);

		var ligne = "[ ";
		for(let i =1;i<151;i++)
		{
			
			
			await page.goto(url);
			await page.waitFor(2000);
			const liste = await page.$$('#countryF > ul > li')

			console.log(i)
			let urlchateau=await liste[i].$eval('a',(a)=>a.href);
			console.log("URL_CHATEAU"+urlchateau)

			let nomchateau=await liste[i].$eval('a',(a)=>a.innerText)
			console.log("NAME "+nomchateau)

			try
			{
				let urlrestaurant=await liste[i].$eval('a:nth-child(2)',(a)=>a.href);
				console.log("URL RESTAU "+urlrestaurant)

				let nomchef=await liste[i].$eval('a:nth-child(2)',(a)=>a.innerText);
                console.log("NOM CHEF "+nomchef)

                await page.goto(urlchateau)
                await page.waitFor(500)

                //let prix=await page.evaluate(()=>document.getElementsByClassName('price')[0].innerText)
					
                //console.log("PRIX :"+prix)

                

                
                //await page.waitForSelector('.jsSecondNav > .jsSecondNavMain > li:nth-child(2) > a > span')
  				


  				const banniere=await page.$$('div.jsSecondNav.will-stick > ul > li')
  				let u=0
  				let go=0
  				for(let ban of banniere)
  				{
  					let visu=await ban.$eval('a',(a)=>a.innerText)
  					console.log(visu)
  					if(visu=="Hôtel")
  					{
  						go++;
  					}
  					if(visu=="Restaurant")
  					{
  						go++;
	  				}
  					u++

  					if(u==2)
  					{
  						break
  					}
  				}



  					

  				if(go==2)
  				{
  					console.log("BONJOUR : TEST REUSSI".red) 

  				



  					await page.click('.jsSecondNav > .jsSecondNavMain > li:nth-child(2) > a > span')
  					await page.waitFor(500)
  					
				    if(await page.evaluate(()=>document.getElementsByClassName('jsSecondNavSub').length==0))
				    {
				      console.log("MBAPPE")
				      const anne=await page.$$('div > div.row.hotelTabsHeader > div:nth-child(1) > div.hotelTabsHeaderTitle')
				 	  let restau=await anne[0].$eval('h3',(h3)=>h3.innerText)
				      //console.log(anne.length)
				      if(restau=="")
				      {
				        restau=await anne[1].$eval('h3',(h3)=>h3.innerText)
				      }
				      console.log("restau :"+restau)
				      ligne+=JSON.stringify({url_chateau :urlchateau,nom_chateau :nomchateau, url_restaurant:urlrestaurant,nom_chef:nomchef,nom_restaurant:restau})

				    } 

				    else
				    {
				      console.log("NEYMAR")
				      const anne=await page.$$('div > div.row.hotelTabsHeader > div:nth-child(1) > div.hotelTabsHeaderTitle')
				      //console.log(anne.length)
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
				      let restau2=await anne2[anne2.length-1].$eval('h3',(h3)=>h3.innerText)
				      console.log("restau 2 : "+restau2)
				      ligne+=JSON.stringify({url_chateau :urlchateau,nom_chateau :nomchateau, url_restaurant:urlrestaurant,nom_chef:nomchef,nom_restaurant1:restau1,nom_restaurant2:restau2})

				    }

  			

  					//const tanniere=await page.$$('div > div.row.hotelTabsHeader > div:nth-child(1) > div.hotelTabsHeaderTitle')
  					//let nomrestaurant=tanniere[0].$eval('h3',(h3)=>h3.innerText)
  					//console.log("Vrai nom restau :"+nomrestaurant)

                	//ligne+=JSON.stringify({url_chateau :urlchateau,nom_chateau :nomchateau, url_restaurant:urlrestaurant,nom_chef:nomchef,nom_restaurant:nomrestaurant})

                	const virgule=","

                	if(i!=150)
                	{
                		ligne=ligne+virgule

                	}
                	if(i==150)
                	{
                		
                		ligne+="]"

                	}
                }
                	
			}
			
			catch(e)
			{
				console.log("Erreur dans la recherche du restaurant ou restaurant inexistant",e)
			}

			

		
		}
		console.log(ligne)
		ecrire(ligne)
	}

	catch(e)
	{
		console.log('our error',e);

	}		
	
		


    
})();