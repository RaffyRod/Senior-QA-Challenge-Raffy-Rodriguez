import CheckOutPage from "../../support/pageObjets/checkOutPage";

const checkOut = new CheckOutPage();

describe('Checkout Test case', function(){

    beforeEach(function(){
        cy.login();
        cy.url().should('eq', Cypress.env('accountPageUrl'));
        cy.goToHome();  
        cy.fixture('items').then(function(data){ this.data = data});

    });

    it('Checkout Item', function(){

        //Adding Item to shopping Cart
        cy.addToShoppingCart(this.data.item);
        checkOut.cartSuccessLabel().should('include.text', Cypress.env('productAddedMsg'));
        checkOut.cartQuantity().should('have.text', this.data.quantity);
        checkOut.cartColor().should('include.text', this.data.color);
        checkOut.cartItemName().should('have.text', this.data.item);
        checkOut.cartTotal().should('have.text', this.data.price);
        checkOut.goToCheckOut().click();

        //checkOut Process
        checkOut.checkoutButton().click();
        checkOut.checkoutButton().click();
        checkOut.termsOfService().check().should('be.checked');
        checkOut.checkoutButton().click();
        checkOut.payWithBankWire().click();
        checkOut.paymentName().should('include.text', 'Bank-wire payment.');
        checkOut.checkoutButton().click();
        checkOut.orderConfirmation().should('have.text', Cypress.env('orderCompleteMsg'));
        checkOut.finalPrice().should('have.text', Cypress.env('finalPrice'));
        cy.signOut();
    });

} );