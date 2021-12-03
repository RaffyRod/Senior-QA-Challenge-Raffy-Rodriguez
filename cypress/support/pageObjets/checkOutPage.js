class CheckOutPage{
    
    addToCartSectionButton(){
        return cy.get('.ajax_add_to_cart_button > span');
    }

    cartSuccessLabel(){
        return cy.get('.layer_cart_product > h2');
    }

    cartItemName(){
        return cy.get('#layer_cart_product_title');
    }

    cartQuantity(){
        return cy.get('#layer_cart_product_quantity');
    }

    cartColor(){
        return cy.get('#layer_cart_product_attributes');
    }

    cartTotal(){
        return cy.get('#layer_cart_product_price');
    }


    goToCheckOut(){
        return cy.get('.button-container > .button-medium > span');
    }

    deleteFromCheckOut(){
        return cy.get('.icon-trash');
    }

    checkOutAlert(){
        return cy.get('.alert');
    }

    //checkout bying process

    checkoutButton(){
        return cy.get('.cart_navigation > .button > span');
    }

   
    termsOfService(){
        return cy.get('#cgv');
    }

    payWithBankWire(){
        return cy.get('.bankwire');
    }

    paymentName(){
        return cy.get('.page-subheading');
    }

   
    orderConfirmation(){
        return cy.get('.cheque-indent > .dark');
    }

    finalPrice(){
        return cy.get('.price > strong');
    }

}
export default CheckOutPage;