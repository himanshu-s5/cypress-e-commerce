import Checkout from "../pageObject/CheckoutPage"
describe('Checkout product test', () => {

    it('Test', () => {

        cy.visit('https://www.amazon.in')

        const checkout = new Checkout()
        checkout.loginAuth()
        checkout.checkoutForProduct('cello ball pen')

    })
})
