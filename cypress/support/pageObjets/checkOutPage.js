class CheckOutPage{

  addToCartSectionButton(){
    return cy.get('.ajax_add_to_cart_button > span');
  }

  getCartSuccessLabel(){
    return cy.get('.layer_cart_product > h2');
  }

  getCartItemName(){
    return cy.get('#layer_cart_product_title');
  }

  getProductQuantity(){
    return cy.get('#layer_cart_product_quantity');
  }

  getProductColor(){
    return cy.get('#layer_cart_product_attributes');
  }

  getOrderTotal(){
    return cy.get('#layer_cart_product_price');
  }

  getCheckOutButton(){
    return cy.get('.button-container > .button-medium > span');
  }

  deleteFromCheckOut(){
    return cy.get('.icon-trash');
  }

  checkOutAlert(){
    return cy.get('.alert');
  }

  //checkout buying process

  getProceedButton(){
    return cy.get('.cart_navigation > .button > span');
  }

  getToSCheck(){
    return cy.get('#cgv');
  }

  getPaymentMethod(){
    return cy.get('.bankwire');
  }

  getPaymentName(){
    return cy.get('.page-subheading');
  }

  getOrderConfirmation(){
    return cy.get('.cheque-indent > .dark');
  }

  getFinalPrice(){
    return cy.get('.price > strong');
  }

}
export default CheckOutPage;