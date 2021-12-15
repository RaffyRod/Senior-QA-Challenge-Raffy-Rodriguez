import getApi from "../../support/utilities/apiHelper";

const API = new getApi();

describe('Marvel Character test cases', function(){
    
    beforeEach(()=>{
        cy.request(`${API.url}/v1/public/comics?title=${API.characterName}&ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            var id = response.body.data.results[10].id  // id was declared using var to take advantage of hoisting
            cy.wrap(id).as('id');
        });

    });

    it('Fetch Spider-Man Comics', function(){
        
        cy.request(`${API.url}/v1/public/characters/${this.id}/comics?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            expect(response).to.have.property('duration');
            expect(response.body.data).to.have.property('count');
        }).its('headers')
        .its('content-type')
        .should('include', 'application/json');
    });

    //Invalid scenarios
    it('Attempting to fetch more than 100 Spider-Man Comics', function(){
        
        cy.request({
            method: 'GET',
            url: `${API.url}/v1/public/characters/${this.id}/comics?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit + 1}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', Cypress.env('moreThanHundred'));
        });
    });  
    
    it('Missing hash, unable to authenticate', function(){
        
        cy.request({
            method: 'GET',
            url: `${API.url}/v1/public/characters/${this.id}/comics?ts=${API.timestamp}&apikey=${API.publicKey}&limit=${API.limit + 1}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.body).to.have.property('code', 'MissingParameter');
            expect(response.body).to.have.property('message', Cypress.env('misingHash'));
        });

    });
});