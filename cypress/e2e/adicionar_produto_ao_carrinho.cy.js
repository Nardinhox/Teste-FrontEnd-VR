describe('Teste de Adição ao Carrinho', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    // Função para quebrar o cookies corrompidos na home
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    
    // Acessar a home do portal
    cy.visit('https://www.vr.com.br');
    
    // Função para o fluxo do teste continuar na mesma aba do browser
    cy.window().then((win) => {
      cy.stub(win, "open")
        .callsFake((url) => {
          return win.open.wrappedMethod.call(win, url, "_self");
        })
        .as("open");
    });
    
    // Navegar para a home Cartões VR
    cy.contains('Compre online').click();
    cy.get('.fas').click()
    cy.contains('Cartões VR').click();

    // Adicionar uma quantidade aleatória de cartões do produto "Auto" com o valor de "R$ 100,00" em cada cartão
    const quantidade = Math.floor(Math.random() * 10) + 1;
    cy.get('#produto-auto-quantidade').clear().type(quantidade);
    cy.get('#produto-auto-valor').clear().type('1000');
    cy.get('#btn-adicionar-carrinho-auto').click();

    // Validar que o produto foi adicionado ao carrinho com sucesso
    cy.get('.product-in-cart-view__content > p').should('contain', 'Produto adicionado!')
    cy.get('#btn-meu-carrinho > .fa-light').click();
    cy.get('.cart-individual-item-container__product-title').should('contain', 'Auto');
    cy.get('.product-information__amount').should('contain', quantidade);
  });
});