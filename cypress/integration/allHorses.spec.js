/// <reference types="Cypress" />
import { aliasQuery, aliasMutation } from '../utils/graphql-test'

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/horses')
    cy.intercept('POST', 'https://aqueous-savannah-80171.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'fetchHorses')
      req.reply({
        fixture: 'allHorses.json'
      })
    })
  })

  it('should list all horses', () => {
    cy.get('.horse-card').should('have.length', 7)
  })

})