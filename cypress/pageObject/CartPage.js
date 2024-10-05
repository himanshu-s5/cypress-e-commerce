class Cart{


    cartCount(){

        return cy.get('#nav-cart-count').invoke('text').then((text)=>parseInt(text))

    }
    
    addToCart(){

        this.cartCount().then((numberOfItem)=>{
        cy.get('#a-autoid-3-announce').scrollIntoView()
        .click()

        cy.get('#nav-cart-count').scrollIntoView().should('be.visible',{timeout:2000})
        .then(()=>{
            cy.wait(2000)
            this.cartCount().then((currentNumberOfItem)=>{
                expect(parseInt(currentNumberOfItem)).to.be.greaterThan(parseInt(numberOfItem))
    
        })
       
        })
        })
       
    }

    deleteCart(){
        cy.get('#nav-cart-count').click()
        cy.get("input[value='Delete']").click()
        cy.get('.a-size-extra-large').should('be.visible').then(()=>{
            cy.get('.a-size-extra-large').contains('empty')

        })
           
    }

    }

    export default Cart 