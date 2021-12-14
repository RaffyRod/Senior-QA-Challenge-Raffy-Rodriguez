class SignInPage{
    
    getSignInButton(){
        return cy.get('.login');
    }

    getEmailInput(){
        return cy.get('#email');
    }

    getPasswordInput(){
        return cy.get('#passwd');
    }

    submitButton(){
        return cy.get('#SubmitLogin > span');
    }

    getAuthObject(){
        return cy.get('.navigation_page');
    }

}

export default SignInPage;