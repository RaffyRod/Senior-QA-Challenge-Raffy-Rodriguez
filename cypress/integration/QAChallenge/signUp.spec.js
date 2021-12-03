import SignUpPage  from "../../support/pageObjets/signUpPage";

const FAKER =  require('faker');
const  RANDOM_EMAIL = FAKER.internet.email();

const SIGNUP = new SignUpPage();


describe('Sign Up test case',function(){

        beforeEach(function(){
            cy.visit('/');
        });


        it('SignUp', function(){
                
                SIGNUP.logingButton().click();
                SIGNUP.createEmail().type(RANDOM_EMAIL);
                SIGNUP.submitEmailButton().click();
                cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation');
        });






});



