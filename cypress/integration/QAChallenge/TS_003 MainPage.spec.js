import MainPage from "../../support/pageObjets/mainPage";
import CheckOutPage from "../../support/pageObjets/checkOutPage";
import { getUser }   from "../../support/utilities/helpers";
import { allValidators }  from "../../support/utilities/helpers";


const mainPage = new MainPage();
const check = new CheckOutPage();
const user = getUser();
const validator = allValidators();


describe('Main Page test cases', function(){

    beforeEach(function(){
        
        cy.login();
        cy.url().should('eq', validator.accountPage);
        cy.goToHome();  
        cy.fixture('items').then(function(data){ this.data = data});      

    });
    

    it('Best Seller section', function(){
       mainPage.bestSellers().click();
       mainPage.activeBestSeller().should('be.visible');     

    });

    it('Search for an item using the search bar', function(){
      
     mainPage.searchBar().type(this.data.item);
     mainPage.searchButton().click();   
     mainPage.itemTitle(this.data.item).should('be.visible');         
        
    });

    it('Adding to the wish list', function(){
        mainPage.searchBar().type(this.data.item);
        mainPage.searchButton().click();   
        mainPage.wishItem().trigger('mouseover');
        mainPage.wishItemMore().click();
        mainPage.wishListButton().click(); 
        mainPage.wishAddedMsg().should('have.text', validator.addedWishConfirmation);
        mainPage.wishAddedMsgClose().click();            
    });

    it('Subscribe to NewsLetter', function(){
        mainPage.newsBar().click();
        mainPage.newsBar().type(user.newsEmail);        
        mainPage.newsButton().click();
        mainPage.newsAlert().should('be.visible');         
    });

    it('Add to shopping Cart', function(){
        cy.addToShoppingCart(this.data.item);
        check.cartSuccessLabel().should('include.text', validator.productAdded);
        check.cartQuantity().should('have.text', this.data.quantity);
        check.cartColor().should('include.text', this.data.color);
        check.cartItemName().should('have.text', this.data.item);
        check.cartTotal().should('have.text', this.data.price);
    });

    it('Remove from shopping cart', function(){
        cy.addToShoppingCart(this.data.item);
        check.cartSuccessLabel().should('include.text', validator.productAdded);
        check.goToCheckOut().click();
        check.deleteFromCheckOut().click();
        check.checkOutAlert().should('have.text', validator.emptyCart)
    });   
});