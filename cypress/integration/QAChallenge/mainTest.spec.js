import MainPage from "../../support/pageObjets/mainPage";

const main = new MainPage();

describe('Dashboard page testing', function(){

    beforeEach(function(){
        cy.login();
        cy.goToHome();
        cy.fixture('items').then(function(data){ this.data = data});

    });

    it('Best Seller section', function(){
       main.bestSellers().click();
       main.activeBestSeller().should('be.visible');
       cy.signOut();
       main.mainMenu().should('be.visible');

    });

    it.only('Search an item with search bar', function(){
      
     main.searchBar().type(this.data.item);
     main.searchButton().click();   
     main.itemTitle(this.data.item).should('be.visible');         
        
    })


   
});