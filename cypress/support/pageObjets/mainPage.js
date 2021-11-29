class MainPage{


        mainMenu(){
            return cy.get('.sf-menu');
        }

        searchBar(){
            return cy.get('#search_query_top');
        }

        searchButton(){
            return cy.get('#searchbox > .btn');
        }

        bestSellers(){
            return cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers');
        }

        activeBestSeller(){
            return cy.get('li.active > a.blockbestsellers');
        }

        itemTitle(item){
            return cy.get('div[class="product-container"] h5 a[title= "'+ item +'"]')
        }

        newsBar(){
            return cy.get('#newsletter-input');
        }

        newsButton(){
            return cy.get('.form-group > .btn');
        }

        newsAlert(){
            return cy.get('.alert');
        }

        viewCart(){
            cy.get('[title="View my shopping cart"]');
        }

        removeFromCart(){
            return cy.get('.remove_link');
        }


}

export default MainPage;