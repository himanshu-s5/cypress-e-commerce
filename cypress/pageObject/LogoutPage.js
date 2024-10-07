class Logout {

    setLogout() {

        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')
        cy.get("a[id='nav-item-signout'] span[class='nav-text']").click()
        cy.url().should('have.contain', 'ap/signin')

    }

}

export default Logout