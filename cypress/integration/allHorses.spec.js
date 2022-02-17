/// <reference types="Cypress" />
import { aliasQuery, hasOperationName } from '../utils/graphql-test'

describe('All horses page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://aqueous-savannah-80171.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'fetchHorses')
      aliasQuery(req, 'fetchHorse')

      if (hasOperationName(req, 'fetchHorses')) {
        req.reply({
          fixture: 'allHorses.json'
        })
      } else if (hasOperationName(req, 'fetchHorse')) {
        req.reply({
          fixture: 'oneHorse.json'
        })
      }
    })
    cy.visit('http://localhost:3000/horses')
  })
    
    it('should list all horses', () => {
      cy.get('.horse-card').should('have.length', 7)
      .first().should('contain', 'Test Horsey cypress')
    })
    
    it('should have horse cards with horse info on it', () => {
      cy.get('.horse-card').first().should('contain', '1', 'Test Horsey', 'AM Feed', 'PM Feed', 'Turnout')
      .should('contain.html', 'img')
    })

    it('should have a header and sidebar', () => {
      cy.get('.sidebar-container').should('exist')
      cy.get('.header-container').should('exist')
    })
    
    it('should bring you to a horse page after you select a horse', () => {
      cy.get('img[alt="Photo of Test Horsey cypress"]').click()
      cy.url().should('contain', 'horses/5')
    })
})