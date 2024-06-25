Teste Automatizado com Cypress - Validação de carrinho de compra
Este repositório contém um teste automatizado com a finalidade de validar se um produto foi adicionado com sucesso no carrinho de compras.

**Pré-requisitos**
Certifique-se de ter as seguintes ferramentas instaladas para executar o teste.

**Ferramentas Necessárias**
Node.js (versão recomendada: 12 ou superior)
Cypress

**Configuração do Ambiente**
1. Instalar Node.js
Verifique se o Node.js está instalado executando "node -v" no terminal. Se não estiver instalado, siga as instruções no site oficial do Node.js (https://nodejs.org/pt).

2. Instalar Cypress
Execute o comando "npm install cypress --save-dev" no terminal para instalar o Cypress como uma dependência de desenvolvimento.

3. Configurar o Projeto
Certifique-se de que o projeto contenha um arquivo "package.json". Se não tiver, crie um executando "npm init -y" no terminal.

4. Instale as dependências do projeto:
Execute o comando "npm install" no terminal

**Estrutura do Projeto**
"cypress/": Diretório contendo os arquivos de testes do Cypress.
  "cypress/e2e/": Contém os testes especificados.
  "cypress/e2e/adicionar_produto_ao_carrinho.cy.js": Arquivo contendo o teste de adição ao carrinho.
  "support/": Contém arquivos de suporte e configurações adicionais.
"package.json": Arquivo de configuração das dependências do projeto.

**Executando o Teste**
Clone este repositório: https://github.com/Nardinhox/Teste-FrontEnd-VR.git
Navegue até o diretório raiz do projeto
Execute o comando "npm run test" no terminal

**Cenário**
Criar um teste automatizado que valide que um produto pode ser adicionado, com sucesso, ao carrinho em nossa loja virtual.

**Critérios de Aceite**
- Acessar a home do portal web (www.vr.com.br);
- Clicar no botão "Compre online" para navegar até a loja;
- Selecionar a opção "Cartões VR";
- Adicionar uma quantidade aleatória de cartões do produto "Auto";
- Digitar um valor de crédito aleatório para o produto "Auto";
- Clicar no botão "Adicionar ao carrinho";
- Validar que produto foi adicionado ao carrinho com sucesso;