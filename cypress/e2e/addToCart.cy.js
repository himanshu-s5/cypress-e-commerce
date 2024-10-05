import Product from "../pageObject/ProductSearchPage";
import Cart from "../pageObject/CartPage";

describe('Add to cart test',()=>{

it('adding item to cart',()=>{

    cy.visit('https://www.amazon.in')
    cy.fixture('configData').then((data)=>{
        
        const product = new Product()
        const cart = new Cart()
        product.validSearch(data.valid.item)
        cart.addToCart()
    })

})

})