import SignInPage from '../../support/pageObjets/signInPage';

const signIn = new SignInPage();

describe('Login and Logout', function(){

       it('Login success', function(){         
        cy.login();
        cy.url().should('eq', Cypress.env('accountPageUrl'));       
    });

    it('Logout success', function(){
        cy.signOut();
        signIn.getAuthObject().should('be.visible');
    });
    
});