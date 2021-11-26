/// <reference types="Cypress"/>
describe('TC001 Login', function(){

    before(function(){
         cy.fixture('loginData').then(function(data){ this.data = data}).then(function(){
            cy.visit('/');
        });
    });
    

    it('login case', function(){
        cy.login(this.data.email, this.data.pass);        
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');
    });

    after(function(){
        cy.signOut();
        
    });
});