import SignUpPage from "../../support/pageObjets/signUpPage";
import getUser from "../../support/utilities/helpers";

const signUp = new SignUpPage();
const user = getUser();

describe('Signing Up as customer',function(){

  beforeEach(function(){
    cy.visit('/');
  });

  it('Creating new account', function(){

    signUp.clicklogingButton().click();
    signUp.setEmailInput().type(user.email);
    signUp.submitEmailButton().click();
    cy.url().should('eq', Cypress.env('accountCreationUrl'));

    //filling out the user information
    signUp.setFirstName().type(user.name);
    signUp.setLastName().type(user.lastName);
    signUp.setUserPassword().type(user.password);
    signUp.setDayOfBirth().select(user.dayOfBirth);
    signUp.setMonthOfBirth().select(user.monthOfBirth);
    signUp.setYearOfBirth().select(user.yearOfBirth);
    signUp.getSignForNewsLetter().check();
    signUp.setReceiveSpecialOffers().check();
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
    signUp.getAddressSubmitButton().click();
    cy.url().should('eq', Cypress.env('accountPageUrl'));
    signUp.setInfoAccount().should('have.text', Cypress.env('welcomeText'));

  });
});
