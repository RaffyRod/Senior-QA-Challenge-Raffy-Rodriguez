import SignInPage from './pageObjets/signInPage';
import MainPage from './pageObjets/mainPage';
import CheckOutPage from './pageObjets/checkOutPage';

const signIn = new SignInPage();
const mainPage = new MainPage();
const checkOut = new CheckOutPage();

Cypress.Commands.add('login', function(email, password){

  cy.fixture('loginData').then(function(data){ this.data = data}).then(function(){
    cy.visit('/');
    signIn.getSignInButton().click();
    signIn.getEmailInput().click();
    signIn.getEmailInput().type(this.data.email);
    signIn.getPasswordInput().type(this.data.pass);
    signIn.submitButton().click();

  });

});

Cypress.Commands.add('signOut', function(){
  mainPage.logOut().click();

});

Cypress.Commands.add('goToHome', function(){
  mainPage.homeButton().click();
});

Cypress.Commands.add('addToShoppingCart', function(item){
  mainPage.setSearchBar().type(item);
  mainPage.clickSearchButton().click();
  checkOut.addToCartSectionButton().click();
});