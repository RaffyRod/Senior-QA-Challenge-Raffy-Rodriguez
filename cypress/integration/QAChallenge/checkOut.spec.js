import CheckOutPage from "../../support/pageObjets/checkOutPage";

const CHECK = new CheckOutPage();

describe('CheckOut Screen Test case', function(){

    beforeEach(function(){
        cy.login();
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');
        cy.goToHome();  
        cy.fixture('items').then(function(data){ this.data = data});

    });

    it('CheckOutItem', function(){

        //Adding Item to shopping Cart
        cy.addToShoppingCart(this.data.item);
        CHECK.cartSuccessLabel().should('include.text', 'Product successfully added to your shopping cart');
        CHECK.cartQuantity().should('have.text', this.data.quantity);
        CHECK.cartColor().should('include.text', this.data.color);
        CHECK.cartItemName().should('have.text', this.data.item);
        CHECK.cartTotal().should('have.text', this.data.price);
        CHECK.goToCheckOut().click();

        //checkOut Process
        CHECK.checkoutButton().click();
        CHECK.checkoutButton().click();
        CHECK.termsOfService().check().should('be.checked');
        CHECK.checkoutButton().click();
        CHECK.payWithBankWire().click();
        CHECK.paymentName().should('include.text', 'Bank-wire payment.');
        CHECK.checkoutButton().click();
        CHECK.orderConfirmation().should('have.text', 'Your order on My Store is complete.');
        CHECK.finalPrice().should('have.text', '$29.00');
        cy.signOut();
    });

} );