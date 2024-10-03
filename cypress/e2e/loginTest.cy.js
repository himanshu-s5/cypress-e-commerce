import LoginPage from "../pageObject/LoginPage.js"

describe('Login test', ()=>{

it.only('test', ()=>{

    cy.visit('https://www.amazon.in')
    cy.fixture('configData').then((data)=>{
        const ln = new LoginPage();
        ln.setUsername(data.username);
        cy.get('.a-form-label').should('have.text', 'Password')
        ln.setPassword(data.password);
        ln.validateDashboard();


    })

})

})