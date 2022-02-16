/// <reference types="Cypress" />
import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test'

describe('Sidebar and misc navigation', () => {
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
    cy.visit('http://localhost:3000/')
    
  })
    
    it('should navigate to all horses page', () => {
      cy.get('.sidebar-container').contains('All Horses').click()
      cy.url().should('contain', '/horses')
      cy.get('.horse-grid').should('exist')
    })

    it('should navigate back to main page', () => {
      cy.get('.sidebar-container').contains('All Horses').click()
      cy.url().should('contain', '/horses')
      cy.get('.sidebar-container').contains('Home').click()
      cy.url().should('contain', '/')
      cy.get('.Dashboard').should('exist')
    })

    it('should navigate to all horses page on mobile view', () => {
      cy.viewport('iphone-8')
      cy.get('.menu-button').click()
      cy.contains('All Horses').click()
      cy.url().should('contain', '/horses')
      cy.get('.horse-grid').should('exist')
    })

    it('should navigate back to main page on mobile view', () => {
      cy.viewport('iphone-8')
      cy.get('.menu-button').click()
      cy.contains('All Horses').click()
      cy.url().should('contain', '/horses')
      cy.get('.horse-grid').should('exist')
      cy.contains('Home').click()
      cy.url().should('contain', '/')
      cy.get('.Dashboard').should('exist')
    })

    it('should close hamburger menu on mobile', () => {
      cy.viewport('iphone-8')
      cy.get('.menu-button').click()
      cy.get('.mobile-nav-items').should('exist')

      cy.get('.menu-button').click()
      cy.get('.main-section').should('not.contain', 'Home', 'All Horses', 'Schedule')
    })

    it('should return to dashboard when you click schedule', () => {
      cy.viewport('iphone-8')
      cy.get('.menu-button').click()
      cy.contains('All Horses').click()
      cy.url().should('contain', '/horses')
      cy.get('.horse-grid').should('exist')
      cy.contains('Schedule').click()
      cy.url().should('contain', '/')
      cy.get('.Dashboard').should('exist')
    })

    it('should return to dashboard if you select schedul', () => {
      cy.get('.sidebar-container').contains('All Horses').click()
      cy.url().should('contain', '/horses')
      cy.get('.sidebar-container').contains('Schedule').click()
      cy.url().should('contain', '/')
      cy.get('.Dashboard').should('exist')
    })

    it('should present a 404 page if the URL is bad', () => {
      cy.visit('http://localhost:3000/anything-here')
      cy.contains('Sorry, something went wrong!').should('exist')
      cy.contains('Return to the Barn').click()
      cy.url().should('contain', '/')
      cy.get('.Dashboard').should('exist')
    })
})