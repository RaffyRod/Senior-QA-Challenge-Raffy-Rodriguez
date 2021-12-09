const md5 = require('md5');

function getApi(){   
    
    let apiData = {};
    const date = new Date();

    apiData.timestamp = date.getTime();
    apiData.publicKey = "5b76b5e9de1795f9b7fbd5dbe201ce51";
    apiData.privateKey = "5d121fd4cfbfd781f35fc0f0ba80f71a21e1d563";
    apiData.hash = md5(apiData.timestamp + apiData.privateKey + apiData.publicKey );
    apiData.url = "https://gateway.marvel.com:443";
    apiData.limit = 100;
    apiData.overLimit = 1;
    apiData.comicTarget = "X-Man";
    apiData.characterName = "Spider-Man";
   

    return apiData;
}


export default getApi;