/// <reference types="Cypress" />
import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test'

describe('Horse profile', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://aqueous-savannah-80171.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'fetchHorses')
      aliasQuery(req, 'fetchHorse')
      aliasMutation(req, 'destroyHorse')

      if (hasOperationName(req, 'fetchHorses')) {
        req.reply({
          fixture: 'allHorses.json'
        })
      } else if (hasOperationName(req, 'fetchHorse')) {
        req.reply({
          fixture: 'oneHorse.json'
        })
      } else if (hasOperationName(req, 'destroyHorse')) {
        req.reply({
          fixture: 'oneHorse.json'
        })
      }
    })
    cy.visit('http://localhost:3000/horses/5')
  })
    
    it('should have all the horse data fields', () => {
      cy.get('.horse-profile').should('contain', 'Test Horsey Cypress', 'Stall', 'Breed', 'Sex', 'Age', 'Color', 'Markings', 'AM Feed', 'PM Feed', 'Supplements', 'Turnout', 'Blanketing Temperature')
    })

    it('should have the individual horse info', () => {
      cy.get('.horse-profile').should('contain', 'breed', 'sexy', 'supplements', 'am', 'pm')
    })

    it('should have contact data fields', () => {
      cy.get('.all-contacts').should('contain', 'Owner:', 'Phone:', 'Vet:', 'Farrier:')
    })

    it('should have contact data fields', () => {
      cy.get('.all-contacts').should('contain', 'Test Owner', 'Test Vet', 'Jo Smith', '12345678911', '12345678911', '15551234')
    })

    it('should have a header and sidebar', () => {
      cy.get('.sidebar-container').should('exist')
      cy.get('.header-container').should('exist')
    })

    it('should open a form', () => {
      cy.get('.edit-horse-button').click()
      cy.get('form').should('exist')
    })

    it('should return to all horses page', () => {
      cy.get('.back-button').click()
      cy.url().should('not.contain', '5')
    })

    it('should be able to delete a horse', () => {
      cy.get('.destroy-button').click()
      cy.wait('@gqldestroyHorseMutation')
        .its('request.body.variables.input')
        .then(res => {
          cy.wrap(res).should('have.property', 'id', 5)
        })
      cy.url().should('not.contain', '5')
    })

    it('should be able to cancel a horse deletion', () => {
      cy.get('.destroy-button').click()
      cy.on('window:confirm', () => false);
      cy.url().should('contain', '5')
    })
})