describe('Clicando em Editar Perfil', function(){

    it('.click() - click on Editar Perfil', function(){

        cy.visit('https://www.instagram.com/hercilio81/?hl=pt-br')
        cy.get('._0mzm-.sqdOP.L3NKy._4pI4F._8A5w5    ').click({ force: true })
        
    })
})