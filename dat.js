const fetch = require('node-fetch');

const uri_chateau="https://www.relaischateaux.com/fr/france/bussiere-cote-d-or-la-bussiere-sur-ouche";
const mois=3;


async function adx(mois,uri) 
{
	const string_mois="2019-";
	const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-"+mois+"&idEntity=22684%7C%7CSTD1DG&pax=2&room=1",
{
    "credentials": "include",
    "headers": {
        "accept": "application/json, text/javascript, /; q=0.01",
        "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        "x-requested-with": "XMLHttpRequest"
    },
    "referrer": uri_chateau,
    "referrerPolicy": "origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors"
}

	 );

	let reponse_json=await response.json()
	console.log(reponse_json)
	//const liste=reponse_json["2019-3"].notAvailable


	var liste_prix=[];
	var liste_date=[];

	for(let i=0;i<=31;i++)
	{
		try
		{
			//let string=String(i)
			//console.log("string :"+string)
			var prix=reponse_json[string_mois+String(mois)].pricesPerDay[String(i)]
			if(typeof prix=='string' )
			{
				//console.log(i)
				liste_date.push(new Date(2019,mois-1,i))
				liste_prix.push(prix)


			}
			//console.log(reponse_json["2019-3"].pricesPerDay[String(i)])
		}

		catch(error) 
		{
  			console.error(error);
  			// expected output: ReferenceError: nonExistentFunction is not defined
  			// Note - error messages will vary depending on browser
		}
	}
	//console.log(reponse_json["2019-3"].pricesPerDay)
	//console.log("LA LISTE : ")
	var liste_finale=[]
	var liste_fd=[]
	var liste_fp=[]
	
	for(var j in liste_prix)
	{
		//console.log(liste_prix[j])
	}
	
	for(var j in liste_date)
	{
		//console.log(liste_date[j].getDay())
		if(liste_date[j].getDay()==6)
		{
			//console.log("TEST DAY"+liste_date[j].getDay())
			liste_fd.push(liste_date[j])
			liste_fp.push(liste_prix[j])
		}
	}
	//console.log("Taile date :"+liste_fd.length)
	liste_finale.push(liste_fd)
	liste_finale.push(liste_fp)

	console.log("FINALY :")

	for(var j in liste_fd)
	{
		console.log(" Date :"+liste_finale[0][j]+" Prix :"+liste_finale[1][j])
	}

	return(liste_finale);


}



const abon=adx(mois,uri_chateau);
