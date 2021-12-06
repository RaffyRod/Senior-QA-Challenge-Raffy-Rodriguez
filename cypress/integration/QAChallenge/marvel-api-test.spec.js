import getApi from "../../support/utilities/apiHelper";

const API = new getApi();

describe('Marvel characters', () => {
    it('Get all Marvel characters', () => {
       

        cy.request(`${API.url}/v1/public/characters?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`).then((response) => {
            expect(response.body).to.have.property('code', 200);
            expect(response.body).not.to.be.null;
            expect(response.body.data).to.have.property('limit', 100);
        })
    })
})