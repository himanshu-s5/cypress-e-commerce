
class product{


    common(){

    const searchItem = cy.get('#twotabsearchtextbox').type(item);
    const clickSearch = cy.get('#nav-search-submit-button').click();
    }
    validSearch(item){
        
        this.searchItem;
        this.clickSearch;
        cy.get(".a-color-state.a-text-bold").should('have.contain', "data-cable type c")

    }

    invalidSearch(item){

        this.searchItem;
        this.clickSearch;
        cy.get(".a-size-medium a-color-base").first().contains("No results")

    }   
}

export default Product