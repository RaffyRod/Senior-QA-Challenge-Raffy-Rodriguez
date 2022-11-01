class MainPage{

  logOut(){
    return cy.get('.logout');
  }

  mainMenu(){
    return cy.get('.sf-menu');
  }

  homeButton(){
    return cy.get('li > .btn > span');
  }

  setSearchBar(){
    return cy.get('#search_query_top');
  }

  clickSearchButton(){
    return cy.get('#searchbox > .btn');
  }

  getBestSellers(){
    return cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers');
  }

  setActiveBestSeller(){
    return cy.get('li.active > a.blockbestsellers');
  }

  getItemTitle(item){
    return cy.get('div[class="product-container"] h5 a[title= "'+ item +'"]')
  }

  setWishItem(){
    return cy.get('.product_img_link > .replace-2x');
  }

  showWishItemMore(){
    return cy.get('.lnk_view > span');
  }

  clickWishListButton(){
    return cy.get('#wishlist_button');
  }

  getWishAddedMsg(){
    return cy.get('.fancybox-error');
  }

  getWishAddedMsgClose(){
    return cy.get('.fancybox-item');
  }

  getNewsBar(){
    return cy.get('#newsletter-input');
  }

  clickNewsButton(){
    return cy.get('.form-group > .btn');
  }

  getNewsAlert(){
    return cy.get('.alert');
  }

}

export default MainPage;