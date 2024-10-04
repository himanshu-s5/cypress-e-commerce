import Product from "../pageObject/ProductSearchPage";

describe('Invalid Item test', ()=>{

    it('test',()=>{

        cy.visit('https://www.amazon.in')
        cy.fixture('configData').then((data)=>{

            const product = new Product();
            product.invalidSearch(data.invalid.item)

        })

    })
})