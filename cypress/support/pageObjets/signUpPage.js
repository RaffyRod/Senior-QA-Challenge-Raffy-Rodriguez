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

    firstName(){
        return cy.get('#customer_firstname');
    }

    lastName(){
        return cy.get('#customer_lastname');
    }

    userPassword(){
        return cy.get('#passwd');
    }

    dayOfBirth(){
        return cy.get('#days');
    }

    monthOfBirth(){
        return cy.get('#months');
    }

    yearOfBirth(){
        return cy.get('#years');
    }

    signForNewsLetter(){
        return cy.get('#newsletter');
    }

    receiveSpecialOffers(){
        return cy.get('#optin');
    }

    //Address Fields

    addressName(){
        return cy.get('#firstname');
    }

    addressLastName(){
        return cy.get('#lastname');
    }

    companyName(){
        return cy.get('#company');
    }

    addressFirstLine(){
        return cy.get('#address1');
    }

    addressSecondLine(){
        return cy.get('#address2');
    }

    addressCity(){
        return cy.get('#city');
    }

    addressState(){
        return  cy.get('#id_state');
    }

    addressZipcode(){
        return cy.get('#postcode');
    }

    addressCountry(){
        return cy.get('#id_country');
    }

    addressMoreInfo(){
        return cy.get('#other');
    }

    addressHomePhone(){
        return cy.get('#phone');
    }

    addressMobilePhone(){
        return cy.get('#phone_mobile');
    }

    addressAlias(){
        return cy.get('#alias');
    }

    addressRegisterButton(){
        return cy.get('#submitAccount > span');
    }





}

export default SignUpPage;