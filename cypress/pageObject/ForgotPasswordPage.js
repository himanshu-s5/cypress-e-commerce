

class ForgotPassword {


    validateForgotPassword() {

        cy.get('#nav-link-accountList-nav-line-1').should('be.visible').click()
        cy.get('#ap_email').type('abc@gmail.com')
        cy.get('#continue').click()
        cy.get('#auth-fpp-link-bottom').should('be.visible').click()
        cy.get("form[name='forgotPassword'] h1").should('contain.text', 'Password assistance')

    }
}

export default ForgotPassword