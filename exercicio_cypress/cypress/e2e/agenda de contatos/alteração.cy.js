/// <reference types="cypress" />

describe('Alteração de Contatos na Agenda', () => {
    it('Deve alterar um contato existente com sucesso', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('.edit').last().click()
        cy.get('input[placeholder="Nome"]').clear().type('Teste2 Teste2')
        cy.get('input[placeholder="E-mail"]').clear().type('teste2@teste2.com')
        cy.get('input[placeholder="Telefone"]').clear().type('22999999999')
        cy.get('.alterar').click()
        cy.get('.contato').should('contain', 'Teste2 Teste2')
        cy.get('.contato').should('contain', 'teste2@teste2.com')
        cy.get('.contato').should('contain', '22999999999')
    })
})