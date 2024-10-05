describe('Category Of Item Test',()=>{

beforeEach(()=>{

    cy.visit('https://www.amazon.in')

    })

it('Todays deal test',()=>{

    cy.get(".nav-a[href='/deals?ref_=nav_cs_gb']").click()
    cy.get(".Bubble-module__bubble_HMAsFLoooPgV9bEqZsLu[data-csa-c-type='uxElement'][data-csa-c-element-id='filter-bubble-deals-collection-top-deals-with-exchange']")
    .should('contain.text','Top deals')

})

it('Electronic category test', ()=>{

    cy.get(".nav-a[href='/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics']").should('be.visible').click()
    cy.get('.a-list-item > .a-size-base',{timeout:2000}).first().invoke('text')
    .then((text)=>{
        expect(text.trim()).to.equal('Electronics')
    })

})

it('mobile category', ()=>{

    cy.get(".nav-a[href='/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles']").click()
    cy.get('.bxc-grid__text > :nth-child(1)').scrollIntoView().should('contain.text', 'mobile')
})

})