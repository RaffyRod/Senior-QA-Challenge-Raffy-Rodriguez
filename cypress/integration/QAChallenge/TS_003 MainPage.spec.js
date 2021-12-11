import MainPage from "../../support/pageObjets/mainPage";
import CheckOutPage from "../../support/pageObjets/checkOutPage";
import getUser  from "../../support/utilities/helpers";


const MAIN_PAGE = new MainPage();
const CHECK = new CheckOutPage();
const USER = getUser();

describe('Main Page test cases', function(){

    beforeEach(function(){
        cy.login();
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');
        cy.goToHome();
        cy.fixture('items').then(function(data){ this.data = data});

    });

    after(function(){
        cy.signOut();
        //MAIN_PAGE.mainMenu().should('be.visible');
    });

    it('Best Seller section', function(){
       MAIN_PAGE.bestSellers().click();
       MAIN_PAGE.activeBestSeller().should('be.visible');     

    });

    it('Search for an using the search bar', function(){
      
     MAIN_PAGE.searchBar().type(this.data.item);
     MAIN_PAGE.searchButton().click();   
     MAIN_PAGE.itemTitle(this.data.item).should('be.visible');         
        
    });

    it('Adding to the wish list', function(){
        MAIN_PAGE.searchBar().type(this.data.item);
        MAIN_PAGE.searchButton().click();   
        MAIN_PAGE.wishItem().trigger('mouseover');
        MAIN_PAGE.wishItemMore().click();
        MAIN_PAGE.wishListButton().click(); 
        MAIN_PAGE.wishAddedMsg().should('have.text', 'Added to your wishlist.');
        MAIN_PAGE.wishAddedMsgClose().click();
        //cy.signOut();    
    });

    it('Subscribe to NewsLetter', function(){
        MAIN_PAGE.newsBar().type(USER.email);
        MAIN_PAGE.newsButton().click();
        MAIN_PAGE.newsAlert().should('have.text', ' Newsletter : You have successfully subscribed to this newsletter.');
    });

    it('Add to shopping Cart', function(){
        cy.addToShoppingCart(this.data.item);
        CHECK.cartSuccessLabel().should('include.text', 'Product successfully added to your shopping cart');
        CHECK.cartQuantity().should('have.text', this.data.quantity);
        CHECK.cartColor().should('include.text', this.data.color);
        CHECK.cartItemName().should('have.text', this.data.item);
        CHECK.cartTotal().should('have.text', this.data.price);
    });

    it('Remove from shopping cart', function(){
        cy.addToShoppingCart(this.data.item);
        CHECK.cartSuccessLabel().should('include.text', 'Product successfully added to your shopping cart');
        CHECK.goToCheckOut().click();
        CHECK.deleteFromCheckOut().click();
        CHECK.checkOutAlert().should('have.text', 'Your shopping cart is empty.')
    });   
});