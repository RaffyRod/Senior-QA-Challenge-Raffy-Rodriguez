import SignUpPage  from "../../support/pageObjets/signUpPage";
import getUser  from "../../support/utilities/helpers";

// const FAKER =  require('faker');
// const  RANDOM_EMAIL = FAKER.internet.email();

// let user = {};


const SIGNUP = new SignUpPage();
let user = getUser();


describe('Sign Up test case',function(){

        beforeEach(function(){
            cy.visit('/');
        });


        it('SignUp', function(){
                
                SIGNUP.logingButton().click();
                SIGNUP.createEmail().type(user.email);
                SIGNUP.submitEmailButton().click();
                cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation');
        });






});



