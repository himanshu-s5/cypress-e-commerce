import Product from "../pageObject/ProductSearchPage";
import ProductDetails from "../pageObject/ProductDetailsPage";
import ProductHistory from "../pageObject/ProductHistoryPage";
import Login from "../pageObject/LoginPage";

describe('Amazon Product Search with History Check', () => {


    it('test1', () => {

        cy.visit('https://amazon.in')
        const item = "Laptop"
        const login = new Login()
        const productSearch = new Product()
        const productDetails = new ProductDetails()
        const productHistory = new ProductHistory()

        cy.fixture('configData').then((data) => {
            login.setUsername(data.valid.username)
            login.setPassword(data.valid.password)
            login.validateDashboard()
        })
        productSearch.validSearch(item)
        productDetails.getProductDetails()
        productHistory.productHistory(item)



    })

})