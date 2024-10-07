import Login from "../pageObject/LoginPage";
import Logout from "../pageObject/LogoutPage";


describe('Logout test', () => {

    it('Test', () => {

        cy.visit('https://www.amazon.in')
        const login = new Login()
        cy.fixture('configData').then((data) => {

            login.setUsername(data.valid.username)
            login.setPassword(data.valid.password)
            login.validateDashboard()

        })
        const logout = new Logout()
        logout.setLogout()


    })

})