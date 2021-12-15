import SignInPage from '../../support/pageObjets/signInPage';

const signIn = new SignInPage();

describe('Login and Logout', function(){

       it('Login process', function(){         
        cy.login();
        cy.url().should('eq', Cypress.env('accountPageUrl'));       
    });

    it('Logout process', function(){
        cy.signOut();
        signIn.getAuthObject().should('be.visible');
    });
    
});