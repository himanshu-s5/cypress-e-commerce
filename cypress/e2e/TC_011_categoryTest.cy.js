import Category from "../pageObject/CategoryPage"

describe('Category Of Item Test', () => {

    it('Test', () => {

        cy.visit('https://www.amazon.in')
        const category = new Category()
        category.todaysDeal()
        category.electronics()
        category.mobiles()

    })
})