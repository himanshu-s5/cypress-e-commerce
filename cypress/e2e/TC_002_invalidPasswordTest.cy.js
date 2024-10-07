import LoginPage from "../pageObject/LoginPage.js"

describe('Invalid Passoword test', () => {

    it.only('test', () => {

        cy.visit('https://www.amazon.in')
        cy.fixture('configData').then((data) => {
            const ln = new LoginPage();
            ln.setUsername(data.valid.username);
            ln.setPassword(data.invalid.password);
            cy.get('.a-size-large').contains('Solve this puzzle')

        })

    })

})