import LoginPage from "../pageObject/LoginPage.js"

describe('Login test', ()=>{

it.only('test', ()=>{

    cy.visit('https://www.amazon.in')
    cy.fixture('configData').then((data)=>{
        const ln = new LoginPage();
        ln.setUsername(data.valid.username);
        cy.get('.a-span5 > .a-form-label').contains('Password')
        ln.setPassword(data.valid.password);
        ln.validateDashboard();configData


    })

})
})