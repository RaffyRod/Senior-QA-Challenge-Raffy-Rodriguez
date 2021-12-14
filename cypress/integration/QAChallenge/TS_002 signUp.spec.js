import SignUpPage  from "../../support/pageObjets/signUpPage";
import { getUser }  from "../../support/utilities/helpers";
import { allValidators }  from "../../support/utilities/helpers";

const signUp = new SignUpPage();
const  user = getUser();
const validator = allValidators();


describe('SignUp',function(){

        beforeEach(function(){
            cy.visit('/');
        });

        it('SignUp', function(){
                
                signUp.logingButton().click();
                signUp.setEmailInput().type(user.email);
                signUp.submitEmailButton().click();
                cy.url().should('eq', validator.accountCreation);

                //filling out the user information
                signUp.setFirstName().type(user.name);
                signUp.setLastName().type(user.lastName);
                signUp.setUserPassword().type(user.password);
                signUp.setDayOfBirth().select(user.dayOfBirth);
                signUp.setMonthOfBirth().select(user.monthOfBirth);
                signUp.setYearOfBirth().select(user.yearOfBirth);
                signUp.signForNewsLetter().check();
                signUp.receiveSpecialOffers().check();
                signUp.setCompanyName().type(user.company);
                signUp.setAddressFirstLine().type(user.address);
                signUp.setAddressSecondLine().type(user.secondaryAddress);
                signUp.setAddressCity().type(user.city);    
                signUp.setAddressZipcode().type(user.zipCode);
                signUp.setAddressCountry().select(user.country);
                signUp.setAddressMoreInfo().type(user.moreInfo);
                signUp.setAddressHomePhone().type(user.homePhone);
                signUp.setAddressMobilePhone().type(user.mobilePhone);
                signUp.setAddressAlias().type(user.addressAlias);

                //the state field needs to be filled out last due to some issues with the website
                signUp.setAddressState().select(user.state);                
                signUp.addressSubmitButton().click();
                cy.url().should('eq', validator.accountPage);
                signUp.infoAccount().should('have.text', validator.welcomeText);      

        });
});



