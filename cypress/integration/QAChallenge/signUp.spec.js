import SignUpPage  from "../../support/pageObjets/signUpPage";
import getUser  from "../../support/utilities/helpers";

// const FAKER =  require('faker');
// const  RANDOM_EMAIL = FAKER.internet.email();

// let user = {};


const SIGNUP = new SignUpPage();
const  USER = getUser();


describe('Sign Up test case',function(){

        beforeEach(function(){
            cy.visit('/');
        });


        it('SignUp', function(){
                
                SIGNUP.logingButton().click();
                SIGNUP.createEmail().type(USER.email);
                SIGNUP.submitEmailButton().click();
                cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation');
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
                SIGNUP.addressState().select(USER.state, { force: true });  // revisar este issue             
                SIGNUP.addressZipcode().type(USER.zipCode);
                SIGNUP.addressCountry().select(USER.country);
                SIGNUP.addressMoreInfo().type(USER.moreInfo);
                SIGNUP.addressHomePhone().type(USER.homePhone);
                SIGNUP.addressMobilePhone().type(USER.mobilePhone);
                SIGNUP.addressAlias().type(USER.addressAlias);
                cy.wait(10000)
                SIGNUP.addressRegisterButton().click();




                

        });






});



