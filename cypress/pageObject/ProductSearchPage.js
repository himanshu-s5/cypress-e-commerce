
class Product{


    common(item){

    cy.get('#twotabsearchtextbox').type(item);
    cy.get('#nav-search-submit-button').click();

    }

    validSearch(item){
        
        this.common(item);
        cy.get(".a-color-state").should('contain.text', item)

    }

    invalidSearch(item){

        this.common(item)
        cy.get(".s-no-outline > :nth-child(1) > :nth-child(1)").should('contain.text',"No results")

    }
}

export default Product