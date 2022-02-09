/// <reference types="Cypress" />

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should have a header', () => {
    cy.get('h1').should('contain', 'Dashboard')
  })

  it('should have the weather', () => {
    cy.get('.weather-widget').should('contain', `Today's Weather`)
    cy.get('.hourly-weather').should('have.length', 8)
  })
  
  it('should have a schedule', () => {
    cy.get('.schedule').should('contain', 'Schedule')
    .should('contain.html', '<table>')
  })

  it('should have an overview', () => {
    cy.get('.horse-overview').should('contain', 'Overview')
  })

  it('should have nav sidebar', () => {
    cy.get('.sidebar-container').should('contain', 'Home', 'All Horses', 'Schedule')
  })

  it('should have a header', () => {
    cy.get('header').should('contain', 'Dashboard', 'Welcome', 'Profile')
  })
})