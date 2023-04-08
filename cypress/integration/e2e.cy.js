/// <reference types="cypress" />


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')
        //selecionar produto 1
        //selecionar produto 2
        //selecionar produto 3
        //selecionar produto 4
        //Adicionar no carrinho
        //fazer checkout
        //validar a compra
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProduto('Stark Fundamental Hoodie','L','Blue',3)
    });



})