import LoginPage from "../pageObject/LoginPage.js"

describe('Invalid user test', ()=>{

it.only('test', ()=>{

    cy.visit('https://www.amazon.in')
    cy.fixture('configData').then((data)=>{
    const ln = new LoginPage();
    ln.setUsername(data.invalidUser);
    cy.get('#auth-error-message-box > .a-box-inner > .a-alert-heading').first().should('have.text', 'There was a problem') 
})
})

})