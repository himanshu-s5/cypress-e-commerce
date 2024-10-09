import Login from "../pageObject/LoginPage.js"
import Product from "./ProductSearchPage";
require('cypress-xpath');

class Checkout {


    loginAuth() {

        cy.fixture('configData').then((data) => {
            const login = new Login()
            login.setUsername(data.valid.username);
            cy.get('.a-span5 > .a-form-label').contains('Password')
            login.setPassword(data.valid.password)
            login.validateDashboard()
        })
    }

    checkoutForProduct(item) {

        const product = new Product()
        product.validSearch(item)

        cy.get('[data-index="3"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal')
            .should('be.visible')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({ force: true })

        cy.get('#buy-now-button').should('be.visible').click()
        cy.get(".a-row.a-spacing-none > .a-section > .a-color-base").should('be.visible').click()

        cy.get('input[placeholder="Enter UPI ID"]').type('himanshu.50@ibl')
        cy.xpath("//input[@name='ppw-widgetEvent:ValidateUpiIdEvent']").should('be.visible').click()

        cy.get('.a-color-success').should('contain.text', 'press continue')
        cy.get('#orderSummaryPrimaryActionBtn > .a-button-inner > .a-button-input').should('be.visible').click()
        cy.get("h2[id='payment-option-text-default'] span[class='break-word']").should('be.visible')
        cy.get("input[aria-labelledby='submitOrderButtonId-announce']").should('be.visible').click()

        cy.get('.a-size-extra-large').should('be.visible').and('contain.text', 'Complete your payment')

    }

}

export default Checkout




