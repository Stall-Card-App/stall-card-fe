describe('Main dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Should have a header', () => {
    cy.get('h1').should('contain', 'Dashboard')
  })
})