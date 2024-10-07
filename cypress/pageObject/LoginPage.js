class Login {

    setUsername(username) {

        cy.get('#nav-link-accountList-nav-line-1').should('be.visible').click()
        cy.get('#ap_email').type(username)
        cy.get('#continue').click()
    }
    setPassword(password) {

        cy.get('#ap_password').type(password)
        cy.get('#signInSubmit').click()
    }
    validateDashboard() {

        cy.get('#nav-link-accountList-nav-line-1').should('have.text', 'Hello, Himanshu')

    }

}

export default Login;