
class Product{


    common(item){

    cy.get('#twotabsearchtextbox').type(item);
    cy.get('#nav-search-submit-button').click();
    const cartButton = cy.get('#a-autoid-3-announce')
    }

    validSearch(item){
        
        this.common(item);
        cy.get(".a-color-state").should('have.contain', "data cable type c")

    }

    invalidSearch(item){

        this.common(item)
        cy.get(".s-no-outline > :nth-child(1) > :nth-child(1)").contains("No results")

    }
}

export default Product