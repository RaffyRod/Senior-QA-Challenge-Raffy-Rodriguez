import CheckOutPage from "../../support/pageObjets/checkOutPage";

const checkOut = new CheckOutPage();

describe('Checkout Test case', function(){

    beforeEach(function(){
        cy.login();
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');
        cy.goToHome();  
        cy.fixture('items').then(function(data){ this.data = data});

    });

    it('Checkout Item', function(){

        //Adding Item to shopping Cart
        cy.addToShoppingCart(this.data.item);
        checkOut.cartSuccessLabel().should('include.text', 'Product successfully added to your shopping cart');
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
        checkOut.orderConfirmation().should('have.text', 'Your order on My Store is complete.');
        checkOut.finalPrice().should('have.text', '$29.00');
        cy.signOut();
    });

} );