import SignInPage from '../../support/pageObjets/signInPage';

const SIGN = new SignInPage();

/// <reference types="Cypress"/>
describe('TC001 Login', function(){

       it('login case', function(){         
        cy.login();
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');       
    });


    it('logOut', function(){
        cy.signOut();
        SIGN.authObject().should('be.visible');
    });
    
});