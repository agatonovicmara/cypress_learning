
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Workdesk', () => {

  it('Make a call', () => {

    cy.visit('https://plugins.gigaaa.com/plugin_website/index.html')
    cy.title().should('eq', 'NeoWeb')
    cy.get('#logo_button').click()
    cy.get(".neoweb__customer__support__icon").click()
    cy.get('.neoweb__customer__support__video').click()
    cy.contains('Your position in queue is')
    
  })


  it('Answer on workdesk', ()=>{

      cy.visit('https://workdesk.gigaaa.link')
      cy.get('.signInButton').click()
      cy.get('#mobile_or_email').type('standard@gtesting.com')
      cy.get('#password').type('123456789')
      cy.get('.sign_in_btn').click()
      cy.xpath('//app-dropdown').first().click()
      cy.get(':nth-child(1) > .dropdownWraper > .dropdownText').contains("Mile's Circle")
      cy.contains("Mile's Circle").click()
      cy.xpath('//app-dropdown').eq(2).click()  // click on calls tab
      cy.get('.buttonClass').click() // click answer btn
      
      cy.visit("https://plugins.gigaaa.com/plugin_website/index.html")
      cy.contains("Join call").click()



  })

  // it('join call on plugin', ()=>{

  // cy.visit("https://plugins.gigaaa.com/plugin_website/index.html")
  // cy.contains("Join call").click()



  // })





  


  









})