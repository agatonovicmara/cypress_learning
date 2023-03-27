
/// <reference types = "Cypress" />

describe('Radio Btns and Checkboxes interactions', () =>{

    it('Radio Buttons', () =>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
      

    })

    it('Checkboxes', () =>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#monday').should('be.visible')
        cy.get('#monday').check().should('be.checked')
        cy.get('.form-check-input').last().check()

        cy.get('#monday').uncheck().should('not.be.checked')

      

    })



})