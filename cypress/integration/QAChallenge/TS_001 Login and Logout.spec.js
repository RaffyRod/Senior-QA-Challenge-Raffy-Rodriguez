import SignInPage from '../../support/pageObjets/signInPage';

const signIn = new SignInPage();

describe('Login and Logout', function(){

       it('login case', function(){         
        cy.login();
        cy.url().should('eq', Cypress.env('accountPageUrl'));       
    });

    it('logOut', function(){
        cy.signOut();
        signIn.getAuthObject().should('be.visible');
    });
    
});