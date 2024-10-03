
class Product{


    common(item){

    cy.get('#twotabsearchtextbox').type(item);
    cy.get('#nav-search-submit-button').click();
    }

    validSearch(item){
        
        this.common(item);
        cy.get(".a-color-state").should('have.contain', "data cable type c")

    }

    invalidSearch(item){

        this.common(item)
        cy.get(".a-size-medium a-color-base").first().contains("No results")

    }   
}

export default Product