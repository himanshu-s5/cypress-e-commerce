import ForgotPassword from "../pageObject/ForgotPasswordPage";

describe('Forgot Password Test', () => {

    it('test', () => {

        cy.visit('https://www.amazon.in')
        const forgot = new ForgotPassword()
        forgot.validateForgotPassword()
    })
})