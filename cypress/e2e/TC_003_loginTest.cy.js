import LoginPage from "../pageObject/LoginPage.js"

describe('Login test', () => {

    it('test', () => {

        cy.visit('https://www.amazon.in')

        cy.fixture('configData').then((data) => {
            const login = new LoginPage()
            login.setUsername(data.valid.username);
            cy.get('.a-span5 > .a-form-label').contains('Password')
            login.setPassword(data.valid.password)
            login.validateDashboard()

        })
    })
})
