import getApi from "../../support/utilities/apiHelper";

const API = new getApi();

describe('Marvel character test cases', function(){
    
    beforeEach(()=>{
        cy.request(`${API.url}/v1/public/characters?nameStartsWith=${API.characterName}&ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            let id = response.body.data.results[10].id
            cy.wrap(id).as('id');
        });

    });

    it('Fetch Spider-Man Comics', function(){
        const targetId = this.id;
        cy.request(`${API.url}/v1/public/characters/${targetId}/comics?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
        .then((response) => {
            expect(response.body).not.to.be.null
            expect(response).to.have.property('duration')
            expect(response.body.data.results).to.have.length(100)
        }).its('headers')
        .its('content-type')
        .should('include', 'application/json');
    });

    //Invalid scenarios
    it('Attempting to fetch more than 100 Spider-Man Comics', function(){
        const targetId = this.id;
        cy.request({
            method: 'GET',
            url: `${API.url}/v1/public/characters/${targetId}/comics?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit + 1}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', 'You may not request more than 100 items.');
        });
    });  
    
    it('Missing hash, unable to authenticate', function(){
        const targetId = this.id;
        cy.request({
            method: 'GET',
            url: `${API.url}/v1/public/characters/${targetId}/comics?ts=${API.timestamp}&apikey=${API.publicKey}&limit=${API.limit + 1}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.body).to.have.property('code', 'MissingParameter');
            expect(response.body).to.have.property('message', 'You must provide a hash.');
        });

    });
});