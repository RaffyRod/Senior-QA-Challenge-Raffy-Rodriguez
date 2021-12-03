const FAKER =  require('faker');


function getUser(){
    
    
    let user = {};
    user.email = FAKER.internet.email();

    return user;

}


export default getUser;