
import ProductDetails from "../pageObject/ProductDetailsPage";
import { searchFeature } from "./TC_006_validItemSearchTest.cy";

describe('Product details test', () => {

    it('test', () => {

        cy.visit('https://www.amazon.in')
        searchFeature()

        const productDetails = new ProductDetails()
        productDetails.getProductDetails()

    })

})




