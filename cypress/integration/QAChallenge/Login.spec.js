import SignInPage from '../../support/pageObjets/signInPage';

const SIGN = new SignInPage();

/// <reference types="Cypress"/>
describe('TC001 Login', function(){

       it('login case', function(){         
        cy.login();       
    });


    it('logOut', function(){
        cy.signOut();
        SIGN.authObject().should('be.visible');
    });
    
});