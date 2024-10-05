import Product from "../pageObject/ProductSearchPage";

describe('Product details test', () => {

    it('test', () => {

        cy.visit('https://www.amazon.in')
        cy.fixture('configData').then((data) => {

            const product = new Product();
            product.common(data.valid.item)
            cy.get('[data-index="4"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium')
                .should('be.visible')
                .invoke('text').then((text) => {
                    cy.get('[data-index="4"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal')
                        .should('be.visible')
                        .scrollIntoView()
                        .invoke('removeAttr', 'target')
                        .click({ force: true })
                    cy.get('#buy-now-button').should('be.visible')
                    cy.get('#feature-bullets > .a-size-base-plus').contains('About')
                    cy.get('#title > #productTitle').invoke('text').then((CurrentText) => {
                    })

                })



        });

    })

})
