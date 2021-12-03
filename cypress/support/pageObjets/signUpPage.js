class SignUpPage{

    logingButton(){
        return cy.get('.login');
    }

    createEmail(){
        return cy.get('#email_create');
    }

    submitEmailButton(){
        return cy.get('#SubmitCreate > span');
    }

    mrOption(){
            return cy.get('#id_gender1');
    }

    mrsOption(){
        return cy.get('#id_gender2');
    }

    firsName(){
        return cy.get('#customer_firstname');
    }

}

export default SignUpPage;