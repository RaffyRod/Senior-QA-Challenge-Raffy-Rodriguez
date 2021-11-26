class SignInPage{
    
    signInButton(){
        return cy.get('.login');
    }

    emailField(){
        return cy.get('#email');
    }

    passField(){
        return cy.get('#passwd');
    }

    submitButton(){
        return cy.get('#SubmitLogin > span');
    }

    authObject(){
        return cy.get('.navigation_page');
    }

}

export default SignInPage;