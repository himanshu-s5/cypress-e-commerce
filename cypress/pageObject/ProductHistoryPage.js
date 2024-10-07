
class ProductHistory {

    productHistory(item) {

        cy.go('back')
        cy.go('back')
        cy.get('.a-size-base').should('be.visible').click()
        cy.get('body > div:nth-child(1) > div:nth-child(28) > div:nth-child(4) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > div:nth-child(1)')
            .should('contain.text', item)
    }



}

export default ProductHistory