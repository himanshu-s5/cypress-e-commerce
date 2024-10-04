class Cart{

    addToCart(){

        let numberOfItem = cy.get('#nav-cart-count').invoke('text')
        cy.get('#a-autoid-3-announce').trigger('scroll')
        cartbtn.click()
        let currentNumberOfItem = cy.get('#nav-cart-count').invoke('text')
        expect(parseInt(numberOfItem) < parseInt(currentNumberOfItem))
        
    }

    deleteCart(){

        cy.get('#a-autoid-3-announce').click()
        cy.get("input[value='Delete']").click()
        cy.get('#a-autoid-3-announce').should('have.text','0')
    }

    }

    export default Cart 