import SignInPage  from './pageObjets/signInPage';


const signIn = new SignInPage();



Cypress.Commands.add('login', (email, password)=>{
   
   cy.fixture('loginData').then(function(data){ this.data = data}).then(function(){
          cy.visit('/');

          signIn.signInButton().click();
          signIn.emailField().type(this.data.email);
          signIn.passField().type(this.data.pass);
          signIn.submitButton().click();
          cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');
          
      });
  
   
})

Cypress.Commands.add('signOut', ()=>{
   cy.get('.logout').click();
   
})

Cypress.Commands.add('goToHome', ()=> {
   cy.get('li > .btn > span').click();
})