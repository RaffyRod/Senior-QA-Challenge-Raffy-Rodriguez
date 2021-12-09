import getApi from "../../support/utilities/apiHelper";

const API = new getApi();

describe('Marvel X-man Comic character Test', function(){

    beforeEach(function(){
        cy.request(`${API.url}/v1/public/comics?title=${API.comicSerie}&ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            let id = response.body.data.results[57].id
            cy.wrap(id).as('id');
        });

    });

    it('Get X-man Series Characters', function(){
        const comicID = this.id;
        cy.request(`${API.url}/v1/public/comics/${comicID}/characters?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            expect(response).to.have.property('duration');
            expect(response.body).to.have.property('code', 200);
            expect(response.body.data.results).to.have.length(10);
        });

    });

    //Invalid scenarios

    it('Missing hash, unable to authenticate', function(){
        const comicID = this.id;
        cy.request({
            method: 'GET',
            url:`${API.url}/v1/public/comics/${comicID}/characters?ts=${API.timestamp}&apikey=${API.publicKey}&limit=${API.limit}`, 
            failOnStatusCode: false       
       
        }).then((response) => {            
            expect(response.body).to.have.property('code', 'MissingParameter');
            expect(response.body).to.have.property('message', 'You must provide a hash.');
    });
});

    it.only('Attempting to get more than 100 X-Man', function(){
        const comicID = this.id;

        cy.request({
            method: 'GET',
            url: `${API.url}/v1/public/comics/${comicID}/characters?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit + 1}`, 
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', 'You may not request more than 100 items.');
        });
    });
});
