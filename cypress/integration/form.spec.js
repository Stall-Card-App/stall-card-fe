/// <reference types="Cypress" />
import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test'

describe('Form', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://aqueous-savannah-80171.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'fetchHorses')
      aliasQuery(req, 'fetchHorse')
      aliasMutation(req, 'addHorse')

      if (hasOperationName(req, 'fetchHorses')) {
        req.reply({
          fixture: 'allHorses.json'
        })
      } else if (hasOperationName(req, 'fetchHorse')) {
        req.reply({
          fixture: 'oneHorse.json'
        }) 
      } else if (hasOperationName(req, 'fetchVets')) {
        req.reply({
          fixture: 'vets.json'
        }) 
      } else if (hasOperationName(req, 'fetchOwners')) {
        req.reply({
          fixture: 'owners.json'
        }) 
      } else if (hasOperationName(req, 'fetchFarriers')) {
        req.reply({
          fixture: 'farriers.json'
        }) 
      } else if (hasOperationName(req, 'addHorse')) {
        req.reply({
          fixture: 'addHorse.json'
        }) 
      } 
    })
    cy.visit('http://localhost:3000/')
    
  })
    
    it('should have basic horse data fields', () => {
      cy.get('.new-horse-button').click()
      cy.get('form').should('contain', 'Name', 'Stall #', 'Age', 'Breed', 'Sex', 'Color', 'Markings')
    })

    it('should have advanced horse data fields', () => {
      cy.get('.new-horse-button').click()
      cy.get('.next-button').click()
      cy.get('form').should('contain', 'AM Feed', 'PM Feed', 'Age', 'Supplements', 'Sex', 'Turnout', 'Blanketing Temp', 'Other Notes')
    })

    it('should have contact data fields', () => {
      cy.get('.new-horse-button').click()
      cy.get('.next-button').click()
      cy.get('.next-button').click()
      cy.get('form').should('contain', 'Owner', 'Farrier', 'Vet')
    })

    it('should have contact fields with contact names as options', () => {
      cy.get('.new-horse-button').click()
      cy.get('.next-button').click()
      cy.get('.next-button').click()
      cy.get('#ownerId').should('contain', 'Test Owner Cypress')
      cy.get('#vetId').should('contain', 'Test Vet Cypress')
      cy.get('#farrierId').should('contain', 'Test Farrier Cypress')
    })

    it('should be able to submit a new horse', () => {
      cy.get('.new-horse-button').click()
      cy.get('#name').click().type('Billy')
      cy.get('#stallNumber').click().type('42')
      cy.get('#age').click().type('27')
      cy.get('#breed').click().type('Appaloosa')
      cy.get('#sex').click().type('gelding')
      cy.get('#color').click().type('chestnut')
      cy.get('#markings').click().type('brown spots')
      cy.get('.next-button').click()

      cy.get('#amFeed').click().type('grain')
      cy.get('#pmFeed').click().type('flake hay')
      cy.get('#supplements').click().type('vitamins')
      cy.get('#turnout').click().type('field')
      cy.get('#blanketingTemp').click().type('40')
      cy.get('#notes').click().type('This is a good horse')
      cy.get('.next-button').click()

      cy.get('#ownerId').select('Test Owner Cypress')
      cy.get('#farrierId').select('Test Farrier Cypress')
      cy.get('#vetId').select('Test Vet Cypress')
      cy.get('.submit-button').click()
      cy.wait('@gqladdHorseMutation')
        .its('request.body.variables.input.params')
        .should('have.property', 'age', 27)
        .should('have.property', 'name', 'Billy')
        .should('have.property', 'stallNumber', 42)
        .should('have.property', 'breed', 'Appaloosa')
        .should('have.property', 'blanketingTemp', 40)
        .should('have.property', 'ownerId', '2')
        //  'name', 'Billy', 'stallNumber', 42, 'breed', 'Appaloosa', 'sex', 'gelding', 'color', 'chestnut', 'markings', 'brown spots', 'amFeed', 'grain', 'pmFeed', 'flake hay', 'supplements', 'vitamins', 'turnout', 'field', 'blanketingTemp', 40, 'notes', 'This is a good horse', 'ownerId', '2', 'farrierId', '2', 'vetId', '2')
        // .should('have.property', 'age', '42', 'breed', 'sex', 'amFeed', 'barnId', 'blanketingTemp', 'farrierId', 'markings', 'name')
    })
})