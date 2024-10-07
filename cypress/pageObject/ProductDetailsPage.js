
class ProductDetails {


    getProductDetails() {

        cy.get('[data-index="4"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal')
            .should('be.visible')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('#buy-now-button').should('be.visible')
        cy.get('#feature-bullets > .a-size-base-plus').scrollIntoView().contains('About')

    }

}

export default ProductDetails