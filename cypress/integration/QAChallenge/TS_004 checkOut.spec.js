import CheckOutPage from "../../support/pageObjets/checkOutPage";

const checkOut = new CheckOutPage();

describe('Checkout Test case', function(){

    beforeEach(function(){
        cy.login();
        cy.url().should('eq', Cypress.env('accountPageUrl'));
        cy.goToHome();  
        cy.fixture('items').then(function(data){ this.data = data});

    });

    it('Checking out item', function(){

        //Adding Item to shopping Cart
        cy.addToShoppingCart(this.data.item);
        checkOut.getCartSuccessLabel().should('include.text', Cypress.env('productAddedMsg'));
        checkOut.getProductQuantity().should('have.text', this.data.quantity);
        checkOut.getProductColor().should('include.text', this.data.color);
        checkOut.getCartItemName().should('have.text', this.data.item);
        checkOut.getOrderTotal().should('have.text', this.data.price);
        checkOut.getCheckOutButton().click();

        //checkOut Process
        checkOut.getProceedButton().click();
        checkOut.getProceedButton().click();
        checkOut.getToSCheck().check().should('be.checked');
        checkOut.getProceedButton().click();
        checkOut.getPaymentMethod().click();
        checkOut.getPaymentName().should('include.text', Cypress.env('paymentType'));
        checkOut.getProceedButton().click();
        checkOut.getOrderConfirmation().should('have.text', Cypress.env('orderCompleteMsg'));
        checkOut.getFinalPrice().should('have.text', Cypress.env('finalPrice'));
        cy.signOut();
    });

} );