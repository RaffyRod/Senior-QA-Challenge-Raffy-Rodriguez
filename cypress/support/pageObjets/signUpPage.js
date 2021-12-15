class SignUpPage{

    clicklogingButton(){
        return cy.get('.login');
    }

    setEmailInput(){
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

    setFirstName(){
        return cy.get('#customer_firstname');
    }

    setLastName(){
        return cy.get('#customer_lastname');
    }

    setUserPassword(){
        return cy.get('#passwd');
    }

    setDayOfBirth(){
        return cy.get('#days');
    }

    setMonthOfBirth(){
        return cy.get('#months');
    }

    setYearOfBirth(){
        return cy.get('#years');
    }

    getSignForNewsLetter(){
        return cy.get('#newsletter');
    }

    setReceiveSpecialOffers(){
        return cy.get('#optin');
    }

    //Address Fields

    setAddressName(){
        return cy.get('#firstname');
    }

    setAddressLastName(){
        return cy.get('#lastname');
    }

    setCompanyName(){
        return cy.get('#company');
    }

    setAddressFirstLine(){
        return cy.get('#address1');
    }

    setAddressSecondLine(){
        return cy.get('#address2');
    }

    setAddressCity(){
        return cy.get('#city');
    }

    setAddressState(){
        return  cy.get('#id_state');
    }

    setAddressZipcode(){
        return cy.get('#postcode');
    }

    setAddressCountry(){
        return cy.get('#id_country');
    }

    setAddressMoreInfo(){
        return cy.get('#other');
    }

    setAddressHomePhone(){
        return cy.get('#phone');
    }

    setAddressMobilePhone(){
        return cy.get('#phone_mobile');
    }

    setAddressAlias(){
        return cy.get('#alias');
    }

    getAddressSubmitButton(){
        return cy.get('#submitAccount > span');
    }

    setInfoAccount(){
        return cy.get('.info-account');
    }
}

export default SignUpPage;