const md5 = require('md5');

function getApi(){   
    
    let apiData = {};
    const date = new Date();

    apiData.timestamp = date.getTime();
    apiData.publicKey = "<your public marverl apiKey here>";
    apiData.privateKey = "<your private marvel apiKey here>";
    apiData.hash = md5(apiData.timestamp + apiData.privateKey + apiData.publicKey);
    apiData.url = "https://gateway.marvel.com:443";
    apiData.limit = 100;    
    apiData.comicSerie = "X-Man";
    apiData.characterName = "Spider-Man";   

    return apiData;
}


export default getApi;