import SignInPage from '../../support/pageObjets/signInPage';
import { allValidators }  from "../../support/utilities/helpers";

const signIn = new SignInPage();
const validator = allValidators();

/// <reference types="Cypress"/>
describe('Login and Logout', function(){

       it('login case', function(){         
        cy.login();
        cy.url().should('eq', validator.accountPage);       
    });


    it('logOut', function(){
        cy.signOut();
        signIn.getAuthObject().should('be.visible');
    });
    
});