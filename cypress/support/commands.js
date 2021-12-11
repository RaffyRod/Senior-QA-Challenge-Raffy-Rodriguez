import SignInPage  from './pageObjets/signInPage';
import MainPage from './pageObjets/mainPage';
import CheckOutPage from './pageObjets/checkOutPage';


const SIGNIN = new SignInPage();
const MAIN_PAGE = new MainPage();
const CHECK = new CheckOutPage();



Cypress.Commands.add('login', function(email, password){
   
   cy.fixture('loginData').then(function(data){ this.data = data}).then(function(){
          cy.visit('/');
          SIGNIN.signInButton().click();
          SIGNIN.emailField().click();
          SIGNIN.emailField().type(this.data.email);
          SIGNIN.passField().type(this.data.pass);
          SIGNIN.submitButton().click();
                   
      });
  
   
});

Cypress.Commands.add('signOut', function(){
   MAIN_PAGE.logOut().dblclick();
   
});

Cypress.Commands.add('goToHome', function(){
   MAIN_PAGE.homeButton().click();
});

Cypress.Commands.add('addToShoppingCart', function(item){
   MAIN_PAGE.searchBar().type(item);
   MAIN_PAGE.searchButton().click();  
   CHECK.addToCartSectionButton().click();
});