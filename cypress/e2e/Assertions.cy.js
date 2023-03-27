
describe ('assertions', () =>{

    it('Implicit assertions', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', "orangehrmlive.com")
                .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                .and('contain', 'opensource-demo.orangehrmlive')
                .and('not.contain', "hello")

        cy.title().should('include', 'Orange')
                  .and('eq', 'OrangeHRM')
                  .and('contain', 'HRM')
                  .and('not.contain', "Black")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
                                                 .and('exist')

        cy.xpath("//a").should('have.length', 5)

        cy.xpath("//input[@placeholder='Username']").type('Admin')
        cy.xpath("//input[@placeholder='Username']").should('have.value','Admin')

        cy.xpath("//input[@placeholder='Password']").type('admin123')
        cy.get('.oxd-button').click()


        let name = 'abc'
        cy.get('.oxd-userdropdown-name').then((x)=>{
            let name=x.text()
        })





    })

})