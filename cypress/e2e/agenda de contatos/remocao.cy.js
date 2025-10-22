
/// <reference types="cypress" />

describe('Exclusão de Contatos na Agenda', () => {
    it('Deve excluir um contato existente com sucesso', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('input[placeholder="Nome"]').type('Contato Teste Remoção')
        cy.get('input[placeholder="E-mail"]').type('remocao@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11999888777')
        cy.get('button[type="submit"]').click()
        cy.get('.contato').should('contain', 'Contato Teste Remoção')
        cy.get('.contato').then($contatos => {
            const quantidadeContatosAntes = $contatos.length
            cy.get('.delete').last().click()
            cy.wait(2000)
            cy.get('.contato').should('have.length', quantidadeContatosAntes - 1)
        })
    })
})