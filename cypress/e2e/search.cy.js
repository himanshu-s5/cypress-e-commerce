import Product from "../pageObject/ProductSearchPage";

describe('Search Item test', ()=>{

    it('test',()=>{

        cy.visit('https://www.amazon.in')
        cy.fixture('configData').then((data)=>{

            const product = new Product();
            product.validSearch(data.valid.item)

        })

    })
})