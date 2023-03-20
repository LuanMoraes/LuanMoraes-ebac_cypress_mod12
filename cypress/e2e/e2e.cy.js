/// <reference types="cypress" />
let prod
let usuario
import checkoutPage from "../support/page_objects/checkoutPage";
import faker from "faker";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    before(() => {
        cy.fixture('produtos').then(listaProdutos=>{
            prod = listaProdutos
        })
        cy.fixture('checkout').then(checkoutInfo=>{
            usuario = checkoutInfo
        })
    });
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
        cy.addProduto(prod[0].produto, prod[0].tamanho, prod[0].cor, prod[0].quantidade)
        cy.addProduto(prod[1].produto, prod[1].tamanho, prod[1].cor, prod[1].quantidade)
        cy.addProduto(prod[2].produto, prod[2].tamanho, prod[2].cor, prod[2].quantidade)
        cy.addProduto(prod[3].produto, prod[3].tamanho, prod[3].cor, prod[3].quantidade)
        cy.get('.sub-title').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        checkoutPage.realizarCheckout(
            usuario[0].nome,
            usuario[0].sobrenome,
            usuario[0].empresa,
            usuario[0].pais,
            usuario[0].endereco,
            usuario[0].numero,
            usuario[0].cidade,
            usuario[0].estado,
            usuario[0].cep,
            usuario[0].telefone,
            usuario[0].email
            )
    });


})