
const puppeteer = require('puppeteer');
const fs=require('fs');
const JSON = require('circular-json');





function ecrire(fileContent)
{
	fs.writeFile("./michelin.json", fileContent, (err) => {
    	if (err)
    	 {
        	console.error(err);
        	return;
    	};
   		 console.log("File has been created");
		});
}


let url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';
let suite='/page-' ;
let i=2;
console.log(JSON.stringify(url+suite+8));

function isObjectsEquals(a, b) {
var isOK = true;
for (var prop in a) {
if (a[prop] !== b[prop]) {
isOK = false;
break;
}
}
return isOK;
};
var ligne = "[ ";
(async function main(){
	try
	{
		const browser=await puppeteer.launch({headless:false});
		const page =await browser.newPage();	
		page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/67.0.3372.0 Safari/537.36');
		
		
		

		//console.log( liste.length)
		/*
		for( let i=0;i<18;i++)
		{
			await page.goto(url);
			await page.waitFor(500);
			const liste = await page.$$('#panels-content-main-leftwrapper > div.panel-panel.panels-content-main-left > div > div > ul > li')


			console.log(i)
			let urlrestaurant=await liste[i].$eval('a',(a)=>a.href);
			let nomrestaurant=await liste[i].$eval('div > a > div.poi_card-details > div.poi_card-description > div.poi_card-display-title',(div)=>div.innerText);
			console.log("NOM_restaurant :"+nomrestaurant)
			console.log("URL_restaurant :"+urlrestaurant)

			await page.goto(urlrestaurant)
			

			//const div =await page.$$('div.l-page > div > div.l-main > div > div.panel-display.panels-michelin-content-layout.panels-michelin-2colsidebar.clearfix > div.panels-content-main.panels-content-main_regionone > div > div.panels-content-main-left > div > div > div > div > div.poi_intro-display-address > div > div > div > div.street-block > div')

			let decscription=await page.evaluate(()=>document.getElementsByClassName('field__items')[4].innerText)
			console.log("Description :"+decscription)

			let rue=await page.evaluate(()=>document.getElementsByClassName('thoroughfare')[0].innerText);

			let postal=await page.evaluate(()=>document.getElementsByClassName('addressfield-container-inline locality-block country-FR')[0].innerText)
			

			//for(const li of lis)



			//var y=page.getElementsByClassName('distinction-icon')

			try
			{

				const test_etoile=await page.evaluate(()=>document.getElementsByClassName('distinction-icon icon-mr icon-cotation1etoile red'))
				console.log(test_etoile)
				console.log(isObjectsEquals(test_etoile,{}));

				if(!isObjectsEquals(test_etoile,{}))
				{
					let etoile=await page.evaluateHandle(()=>document.getElementsByClassName('content-wrapper')[0].innerText)
					console.log("Etoile :"+etoile)

					ligne+=JSON.stringify({urlrestaurant:urlrestaurant,nom_restaurant:nomrestaurant,etoile:etoile.toString(),decscription:decscription,rue:rue,postal:postal})

					const virgule=","

					ligne=ligne+virgule


					// console.log(ligne)
				}
			

			}
			catch(e)
			{
				console.log('erreur etoile',e);

			}
	

			
			console.log(rue+" "+postal)
		}
		*/

		let u=0
		for(let j=2;j<=35;j++)
		{
			for( let i=0;i<18;i++)
			{
				try
				{



					await page.goto(url+suite+j)
					await page.waitFor(100)
					let liste = await page.$$('#panels-content-main-leftwrapper > div.panel-panel.panels-content-main-left > div > div > ul > li')
					let urlrestaurant=await liste[i].$eval('a',(a)=>a.href);
					let nomrestaurant=await liste[i].$eval('div > a > div.poi_card-details > div.poi_card-description > div.poi_card-display-title',(div)=>div.innerText);
					console.log("NOM_restaurant :"+nomrestaurant)
					console.log("URL_restaurant :"+urlrestaurant)

				
					await page.goto(urlrestaurant)
					let decscription=await page.evaluate(()=>document.getElementsByClassName('field__items')[4].innerText)
					console.log("Description :"+decscription)

			//const div =await page.$$('div.l-page > div > div.l-main > div > div.panel-display.panels-michelin-content-layout.panels-michelin-2colsidebar.clearfix > div.panels-content-main.panels-content-main_regionone > div > div.panels-content-main-left > div > div > div > div > div.poi_intro-display-address > div > div > div > div.street-block > div')
					let rue=await page.evaluate(()=>document.getElementsByClassName('thoroughfare')[0].innerText)
					let postal=await page.evaluate(()=>document.getElementsByClassName('addressfield-container-inline locality-block country-FR')[0].innerText)

					console.log(rue+" "+postal)

					

  					// Select the #svg img element and save the screenshot.
  					
					
					let link=await page.evaluate(()=>document.getElementsByClassName('auto_image_style landscape')[1].currentSrc )
  					await page.goto(link)
  					await page.waitFor(500)
  					let string_photo='images/'+u+'screen'+nomrestaurant.replace(/ /g, '_')+'.png'
  					await page.screenshot({
   					path: string_photo
    				
  					});
  					
				
  					await page.goto(urlrestaurant)

					const test_1etoile=await page.evaluate(()=>document.getElementsByClassName('distinction-icon icon-mr icon-cotation1etoile red'))
					const test_2etoile=await page.evaluate(()=>document.getElementsByClassName('distinction-icon icon-mr icon-cotation2etoiles red'))
					const test_3etoile=await page.evaluate(()=>document.getElementsByClassName('distinction-icon icon-mr icon-cotation3etoiles red'))
					//console.log(test_etoile)
					//console.log(isObjectsEquals(test_etoile,{}));
					console.log("HEEEEEEEELLLLO")
					if(!isObjectsEquals(test_1etoile,{}))
					{
						console.log(isObjectsEquals(test_1etoile,{}));

						let etoile=await page.evaluateHandle(()=>document.getElementsByClassName('content-wrapper')[0].innerText)
						console.log("Etoile :"+etoile)

						ligne+=JSON.stringify({id:u,urlrestaurant:urlrestaurant,nom_restaurant:nomrestaurant,etoile:etoile.toString(),decscription:decscription,rue:rue,postal:postal,path_photo:string_photo})

						const virgule=","

						ligne=ligne+virgule


					}
					if(!isObjectsEquals(test_2etoile,{}))
					{
						console.log(isObjectsEquals(test_2etoile,{}));

						let etoile=await page.evaluateHandle(()=>document.getElementsByClassName('content-wrapper')[0].innerText)
						console.log("Etoile :"+etoile)

						ligne+=JSON.stringify({id:u,urlrestaurant:urlrestaurant,nom_restaurant:nomrestaurant,etoile:etoile.toString(),decscription:decscription,rue:rue,postal:postal,path_photo:string_photo})

						const virgule=","

						ligne=ligne+virgule

	
					}
					if(!isObjectsEquals(test_3etoile,{}))
					{
						console.log(isObjectsEquals(test_3etoile,{}));

						let etoile=await page.evaluateHandle(()=>document.getElementsByClassName('content-wrapper')[0].innerText)
						console.log("Etoile :"+etoile)


						ligne+=JSON.stringify({id:u,urlrestaurant:urlrestaurant,nom_restaurant:nomrestaurant,etoile:etoile.toString(),decscription:decscription,rue:rue,postal:postal,path_photo:string_photo})

						const virgule=","

						ligne=ligne+virgule
					}
					u=u+1
			

				}
				catch(e)
				{
					console.log('erreur etoile',e);

				}
	


				//console.log("bien")
				console.log("Page numéro "+j)

		
			}
				

		}

		console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
		console.log(ar.length)

	}	


	catch(e){
		console.log('our error',e);

	}	

	ligne+="]"	;
	console.log(ligne)
	ecrire(ligne)
	
	
		


    
})();