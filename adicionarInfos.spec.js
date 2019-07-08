
describe('Adicionando Informações', function() {
  beforeEach(function()  {
    cy.visit('https://www.instagram.com/accounts/edit/?hl=pt-br')
  })

    it('.type() - type into a DOM element', () => {
    
    cy.get('#pepName')
    cy.get('#pepWebsite')
      .type('http://www.google.com').should('have.value', 'http://www.google.com')
    cy.get('#pepBio')
      .type('Minha Biografia').should('have.value', 'Minha Biografia')
    cy.get('._0mzm-.sqdOP.L3NKy       ').click({ force: true })
    
 })

})
