import MainPage from "../../support/pageObjets/mainPage";

const MAIN_PAGE = new MainPage();

describe('Dashboard page testing', function(){

    beforeEach(function(){
        cy.login();
        cy.goToHome();
        cy.fixture('items').then(function(data){ this.data = data});

    });

    it('Best Seller section', function(){
       MAIN_PAGE.bestSellers().click();
       MAIN_PAGE.activeBestSeller().should('be.visible');
       cy.signOut();
       MAIN_PAGE.mainMenu().should('be.visible');

    });

    it('Search an item with search bar', function(){
      
     MAIN_PAGE.searchBar().type(this.data.item);
     MAIN_PAGE.searchButton().click();   
     MAIN_PAGE.itemTitle(this.data.item).should('be.visible');         
        
    });


   
});