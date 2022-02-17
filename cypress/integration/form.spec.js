/// <reference types="Cypress" />
import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test'

describe('Form', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.cloudinary.com/v1_1/careid/image/upload', (req) => {
     req.reply({
       data: {
         url: 'http://res.cloudinary.com/careid/image/upload/v1644978347/rfrartphslox5ij3oy6l.jpg'
       }
     })

    })
    cy.intercept('POST', 'https://aqueous-savannah-80171.herokuapp.com/graphql', (req) => {
      aliasQuery(req, 'fetchHorses')
      aliasQuery(req, 'fetchHorse')
      aliasMutation(req, 'addHorse')
      aliasMutation(req, 'addOwner')
      aliasMutation(req, 'addFarrier')
      aliasMutation(req, 'addVet')
      aliasMutation(req, 'updateHorse')

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
      } else if (hasOperationName(req, 'addOwner')) {
        req.reply({
          fixture: 'addHorse.json'
        }) 
      } else if (hasOperationName(req, 'addFarrier')) {
        req.reply({
          fixture: 'addFarrier.json'
        }) 
      } else if (hasOperationName(req, 'addVet')) {
        req.reply({
          fixture: 'addVet.json'
        }) 
      } else if (hasOperationName(req, 'updateHorse')) {
        req.reply({
          fixture: 'oneHorse.json'
        }) 
      } 
    })
    cy.visit('http://localhost:3000/horses')
    
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
      cy.get('#photo').attachFile('bleppyImg.png')
      cy.wait(2000)
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
        .then(res => {
          cy.wrap(res).should('have.property', 'name', 'Billy')
          cy.wrap(res).should('have.property', 'stallNumber', 42)
          cy.wrap(res).should('have.property', 'age', 27)
          cy.wrap(res).should('have.property', 'sex', 'gelding')
          cy.wrap(res).should('have.property', 'color', 'chestnut')
          cy.wrap(res).should('have.property', 'markings', 'brown spots')
          cy.wrap(res).should('have.property', 'amFeed', 'grain')
          cy.wrap(res).should('have.property', 'pmFeed', 'flake hay')
          cy.wrap(res).should('have.property', 'supplements', 'vitamins')
          cy.wrap(res).should('have.property', 'turnout', 'field')
          cy.wrap(res).should('have.property', 'notes', 'This is a good horse')
          cy.wrap(res).should('have.property', 'farrierId', 2)
          cy.wrap(res).should('have.property', 'vetId', 2)
          cy.wrap(res).should('have.property', 'breed', 'Appaloosa')
          cy.wrap(res).should('have.property', 'blanketingTemp', 40)
          cy.wrap(res).should('have.property', 'ownerId', 2)
        })
    })

    it('should log an error for image upload', () => {
    cy.intercept('POST', 'https://api.cloudinary.com/v1_1/careid/image/upload', (req) => {
     req.reply({
       statusCode: 400
     })
    }).as('error-message')
    cy.get('.new-horse-button').click()
    cy.get('#name').click().type('Billy')
    cy.get('#photo').attachFile('bleppyImg.png')
    cy.wait('@error-message').its('response.statusCode').should('eql', 400)
    })

    it('should be able to create new contacts', () => {
      cy.get('.new-horse-button').click()
      cy.get('#name').click().type('Billy')
      cy.get('#photo').attachFile('bleppyImg.png')
      cy.wait(2000)
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

      cy.get('#ownerId').select('New contact')
      cy.get('#name').click().type('Horse Owner')
      cy.get('#phoneNumber').click().type('15551478')
      cy.contains('Save contact').click()
      cy.wait('@gqladdOwnerMutation')
        .its('request.body.variables.input.params')
        .then(res => {
          cy.wrap(res).should('have.property', 'name', 'Horse Owner')
          cy.wrap(res).should('have.property', 'phoneNumber', '15551478')
        })
      cy.get('#ownerId').select('Sally Smith')
      cy.get('#farrierId').select('New contact')
      cy.get('#name').click().type('Horse Farrier')
      cy.get('#phoneNumber').click().type('15551465')
      cy.contains('Save contact').click()
      cy.wait('@gqladdFarrierMutation')
      .its('request.body.variables.input.params')
      .then(res => {
        cy.wrap(res).should('have.property', 'name', 'Horse Farrier')
        cy.wrap(res).should('have.property', 'phoneNumber', '15551465')
      })
      cy.get('#farrierId').select('Jo Smith')

      cy.get('#vetId').select('New contact')
      cy.get('#name').click().type('Horse Vet')
      cy.get('#phoneNumber').click().type('15551488')
      cy.contains('Save contact').click()
      cy.wait('@gqladdVetMutation')
      .its('request.body.variables.input.params')
      .then(res => {
        cy.wrap(res).should('have.property', 'name', 'Horse Vet')
        cy.wrap(res).should('have.property', 'phoneNumber', '15551488')
      })
      cy.get('#vetId').select('Good Vet')
      cy.get('.submit-button').click()
    })

    it('should edit an existing horse', () => {
      cy.contains('All Horses').click()
      cy.get('.horse-card').first().get('img[alt="Photo of Test Horsey cypress"]').click()
      cy.get('.edit-horse-button').click()
      cy.get('#name').should('have.value', 'Test Horsey Cypress')
      .click().clear().type('Billy').should('have.value', 'Billy')
      cy.get('.next-button').click()
      cy.get('.next-button').click()
      cy.get('.submit-button').click()
      cy.wait('@gqlupdateHorseMutation')
        .its('request.body.variables.input.params')
        .then(res => {
          cy.wrap(res).should('have.property', 'name', 'Billy')
        })
    })

    it('should navigate backwards through form', () => {
      cy.get('.new-horse-button').click()
      cy.get('.next-button').click()
      cy.get('.next-button').click()
      cy.get('#ownerId').should('exist')
      cy.get('.back-button').click()
      cy.get('.back-button').click()
      cy.get('#name').should('exist')
    })
})