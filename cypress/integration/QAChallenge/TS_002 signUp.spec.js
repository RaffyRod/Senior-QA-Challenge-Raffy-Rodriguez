import SignUpPage  from "../../support/pageObjets/signUpPage";
import getUser  from "../../support/utilities/helpers";

const SIGNUP = new SignUpPage();
const  USER = getUser();


describe('SignUp',function(){

        beforeEach(function(){
            cy.visit('/');
        });

        it('SignUp', function(){
                
                SIGNUP.logingButton().click();
                SIGNUP.createEmail().type(USER.email);
                SIGNUP.submitEmailButton().click();
                cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation');

                //filling out the user information
                SIGNUP.firstName().type(USER.name);
                SIGNUP.lastName().type(USER.lastName);
                SIGNUP.userPassword().type(USER.password);
                SIGNUP.dayOfBirth().select(USER.dayOfBirth);
                SIGNUP.monthOfBirth().select(USER.monthOfBirth);
                SIGNUP.yearOfBirth().select(USER.yearOfBirth);
                SIGNUP.signForNewsLetter().check();
                SIGNUP.receiveSpecialOffers().check();
                SIGNUP.companyName().type(USER.company);
                SIGNUP.addressFirstLine().type(USER.address);
                SIGNUP.addressSecondLine().type(USER.secondaryAddress);
                SIGNUP.addressCity().type(USER.city);    
                SIGNUP.addressZipcode().type(USER.zipCode);
                SIGNUP.addressCountry().select(USER.country);
                SIGNUP.addressMoreInfo().type(USER.moreInfo);
                SIGNUP.addressHomePhone().type(USER.homePhone);
                SIGNUP.addressMobilePhone().type(USER.mobilePhone);
                SIGNUP.addressAlias().type(USER.addressAlias);

                //the state field needs to be filled out last due to some issues with the website
                SIGNUP.addressState().select(USER.state);                
                SIGNUP.addressRegisterButton().click();
                cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');
                SIGNUP.infoAccount().should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.');      

        });
});



