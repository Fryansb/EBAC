/// <reference types="cypress" />

describe('Inclusão de Contatos na Agenda', () => {
    it('Deve incluir um novo contato com sucesso', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('input[placeholder="Nome"]').type('Teste Teste')
        cy.get('input[placeholder="E-mail"]').type('teste@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11999999999')
        cy.get('button[type="submit"]').click()
        cy.get('.contato').should('contain', 'Teste Teste')
        cy.get('.contato').should('contain', 'teste@teste.com')
        cy.get('.contato').should('contain', '11999999999')
    })
})