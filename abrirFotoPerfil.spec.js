describe('Abrindo Foto Perfil', function(){

    it('.click() - Foto Perfil', function(){

        cy.visit('https://www.instagram.com/hercilio81/?hl=pt-br')
        cy.get('.IalUJ ').click({ force: true })
        
    })
})