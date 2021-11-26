import SignInPage  from './pageObjets/signInPage';


const signIn = new SignInPage();



Cypress.Commands.add('login', (email, password)=>{
   signIn.signInButton().click();
   signIn.emailField().type(email);
   signIn.passField().type(password);
   signIn.submitButton().click();
})

Cypress.Commands.add('signOut', ()=>{
   cy.get('.logout').click();
   signIn.authObject().should('be.visible');
})