import getApi from "../../support/utilities/apiHelper";

const API = new getApi();

describe('Marvel X-man Comic Character Test', function(){

  beforeEach(function(){
    cy.request(`${API.url}/v1/public/comics?title=${API.comicSerie}&ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
      .then((response) => {
        expect(response.body).not.to.be.null
        var id = response.body.data.results[57].id // id was declared using var to take advantage of hoisting
        cy.wrap(id).as('id');
      });

  });

  it('Get X-man Serie Characters', function(){

    cy.request(`${API.url}/v1/public/comics/${this.id}/characters?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
      .then((response) => {
        expect(response.body).not.to.be.null
        expect(response).to.have.property('duration');
        expect(response.body).to.have.property('code', 200);
        expect(response.body.data.results).to.have.length(10);
      });

  });

  //Invalid scenarios

  it('Missing hash, unable to authenticate', function(){

    cy.request({
      method: 'GET',
      url:`${API.url}/v1/public/comics/${this.id}/characters?ts=${API.timestamp}&apikey=${API.publicKey}&limit=${API.limit}`,
      failOnStatusCode: false

    }).then((response) => {
      expect(response.body).to.have.property('code', 'MissingParameter');
      expect(response.body).to.have.property('message', 'You must provide a hash.');
    });
  });

  it('Attempting to get more than 100 X-Man', function(){

    cy.request({
      method: 'GET',
      url: `${API.url}/v1/public/comics/${this.id}/characters?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit + 1}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.body).to.have.property('code', 409);
      expect(response.body).to.have.property('status', Cypress.env('moreThanHundred'));
    });
  });
});
