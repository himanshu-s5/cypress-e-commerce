import LoginPage from "../pageObject/LoginPage.js"

describe('Invalid Passoword test', ()=>{

it.only('test', ()=>{

    cy.visit('https://www.amazon.in')
    cy.fixture('configData').then((data)=>{
        const ln = new LoginPage();
        ln.setUsername(data.username);
        ln.setPassword(data.invalidPassword);
        cy.get('.a-size-large').contains('Solve this puzzle')
        
    })
    
})

})