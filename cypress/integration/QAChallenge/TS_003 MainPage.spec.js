import MainPage from "../../support/pageObjets/mainPage";
import CheckOutPage from "../../support/pageObjets/checkOutPage";
import  getUser    from "../../support/utilities/helpers";


const mainPage = new MainPage();
const check = new CheckOutPage();
const user = getUser();


describe('Main Page test cases', function(){

    beforeEach(function(){
        
        cy.login();
        cy.url().should('eq', Cypress.env('accountPageUrl'));
        cy.goToHome();  
        cy.fixture('items').then(function(data){ this.data = data});      

    });
    

    it('Moving to Best Seller section', function(){
       mainPage.getBestSellers().click();
       mainPage.setActiveBestSeller().should('be.visible');     

    });

    it('Searching for an item using the search bar', function(){
      
     mainPage.setSearchBar().type(this.data.item);
     mainPage.clickSearchButton().click();   
     mainPage.getItemTitle(this.data.item).should('be.visible');         
        
    });

    it.only('Adding an item to the wish list', function(){
        mainPage.setSearchBar().type(this.data.item);
        mainPage.clickSearchButton().click();   
        mainPage.setWishItem().trigger('mouseover');
        mainPage.showWishItemMore().click();
        mainPage.clickWishListButton().click(); 
        mainPage.getWishAddedMsg().should('have.text', Cypress.env('addedWishConfirmationMsg'));
        mainPage.getWishAddedMsgClose().click();            
    });

    it('Subscribing to the NewsLetter', function(){
        mainPage.getNewsBar().click();
        mainPage.getNewsBar().type(user.newsEmail);        
        mainPage.clickNewsButton().click();
        mainPage.getNewsAlert().should('be.visible');         
    });

    it('Adding an item to the shopping Cart', function(){
        cy.addToShoppingCart(this.data.item);
        check.getCartSuccessLabel().should('include.text', Cypress.env('productAddedMsg'));
        check.getProductQuantity().should('have.text', this.data.quantity);
        check.getProductColor().should('include.text', this.data.color);
        check.getCartItemName().should('have.text', this.data.item);
        check.getOrderTotal().should('have.text', this.data.price);
    });

    it('Remove an item from shopping cart', function(){
        cy.addToShoppingCart(this.data.item);
        check.getCartSuccessLabel().should('include.text', Cypress.env('productAddedMsg'));
        check.getCheckOutButton().click();
        check.deleteFromCheckOut().click();
        check.checkOutAlert().should('have.text', Cypress.env('emptyCartMsg'));
    });   
});