# Boas-vindas ao projeto MongoDB!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary>
    <strong>🤷🏽‍♀️ Como entregar</strong>
  </summary><br>

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  > Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary>
    <strong>👨‍💻 O que deverá ser desenvolvido</strong>
  </summary><br>

  Agora que você já aprendeu **MongoDB**, chegou a hora de praticar todos os conceitos ensinados até aqui por meio do projeto _commerce_!

  Nesse projeto, você vai trabalhar com o banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas. As instruções de como restaurar o banco podem ser lidas a seguir.

</details>

<details>
  <summary>
    <strong>🗓 Data de Entrega</strong>
  </summary><br>
  
  - Este projeto é individual;
  - Será `1` dia de projeto;
  - Data de entrega para avaliação final do projeto: `01/08/2022 14:00`.

</details>

# Orientações

<details>
  <summary>
    <strong>‼️ Antes de começar a desenvolver</strong>
  </summary><br>

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-017-mongodb-commerce.git`.

  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-017-mongodb-commerce`

  2. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
    
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
    
  - Agora crie uma branch na qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b seunome-mongodb-commerce`

  3. Para cada exercício você deve criar um novo arquivo JS **dentro de uma pasta na raiz do seu projeto chamada `challenges`** seguindo a seguinte estrutura:

  - desafio1.js, desafio2.js, ..., desafioN.js

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.js)
    
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando arquivo de solução _challenges/desafio1.js_ para desafio 1)
      - `git status` (deve aparecer listado o arquivo _challenges/desafio1.js_ em verde)
      
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto MongoDB Commerce'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-017-mongodb-commerce`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-017-mongodb-commerce/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-017-mongodb-commerce/pulls) e confira se o seu _Pull Request_ está criado

</details>

<details>
  <summary>
    <strong>⌨️ Durante o desenvolvimento</strong>
  </summary><br>

  - Faça `commits` das alterações que você realizar no código regularmente;

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

  - Os comandos que você vai utilizar com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary>
    <strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong>
  </summary><br>

  Para sinalizar que o seu projeto está pronto para _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-017`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary>
    <strong>🕵🏿 Revisando um pull request</strong>
  </summary><br>

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary>
    <strong>🎛 Linter</strong>
  </summary><br>

  Para fazer a análise estática do seu código neste projeto, vamos utilizar o linter [ESLint](https://eslint.org/). Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

  ➡️ Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivo `package.json`.

  ➡️ Para poder rodar o `ESLint` basta:

  - Executar o comando `npm install` dentro do projeto e depois `npm run lint`.

  - Se a análise do `ESLint` encontrar problemas no seu código, eles serão mostrados no seu terminal. 
  - Se não houver problema no seu código, nada será impresso no seu terminal.

  - Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

  ⚠️ **Importante**: Pull Requests com issues de Linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento.

</details>

<details>
  <summary>
    <strong>🛠 Testes</strong>
  </summary><br>

  - Para executar localmente os testes, é preciso estar na raiz do diretório do projeto e escrever o seguinte no seu terminal,:

  ```sh
  ./scripts/evaluate.sh
  ```

  👀 **De olho na dica**: esse script vai imprimir um relatório indicando se o teste passou ou não para cada desafio. Como a execução do script envolve restauração da base de dados `commerce` de um teste para outro, recomenda-se esperar pela sua execução completa.

  - Para executar somente o teste de um desafio, execute o comando abaixo substituindo N pelo número do desafio

  ```sh
  ./scripts/evaluate.sh desafioN
  ```

  ⚠️**Importante**: como o banco de dados `commerce` é restaurado de um teste para outro durante a avaliação, **sempre use o banco restaurado na hora de fazer um desafio**. Veja a orientação ➡️ ♻️ Restaurando o banco de dados `commerce`.

  ⚠️ **Importante**: o avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

</details>

<details>
  <summary>
    <strong>🐳 Como usar o Docker para este projeto</strong>
  </summary><br>

  - Para quem não possui o MongoDB instalado e está utilizando o docker, é necessário executar os testes localmente usando os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container acesse o diretório mapeado no volume (no exemplo acima `/app`);
  5. Por fim, execute o script de testes do projeto: `./scripts/evaluate.sh`.
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

</details>

<details>
  <summary>
    <strong>♻️ Restaurando o banco de dados `commerce`</strong>
  </summary><br>

  1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro como **_Connection refused_**, tente reiniciar sua instância [seguindo as orientações desse link](https://app.betrybe.com/course/d396e5a2-d5c9-4f3a-b723-1a1d3ea06b3d).

  2. Quando sua instância estiver no ar e você estiver conectado a ela, digite `exit`. Com isso, você voltará ao terminal para iniciar a importação dos dados.

  3. Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:
    ```sh
    DBNAME=commerce ./scripts/resetdb.sh assets/produtos
    ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

  ⚠️ **Importante**: tanto o script executado anteriormente quanto o script de execução local dos testes, restauram a base de dados `commerce`, portanto sempre salve seu progresso nos arquivos de desafio! Veja a orientação ➡️ 🛠 Testes ⚠️

</details>

<details>
  <summary>
    <strong>👷 Estruturação do projeto</strong>
  </summary><br>

  - ⚠ **Crie todos os arquivos dentro da pasta `challenges`** ⚠

  Esse projeto possui uma série de desafios com diferentes níveis de complexidade. Cada desafio deve ser resolvido em seu arquivo próprio. Para isso:

  1. Leia o comando e crie o diretório `challenges` com um arquivo chamado `desafioN.js`, em que N é o número do desafio.

  2. O arquivo `desafioN.js` deve conter apenas o código MQL (_Mongo Query Language_) do desafio resolvido. **Lembre-se sempre de incluir o ponto e vírgula (";") no final de suas queries**, como no exemplo a seguir:

  ```js
  db.produtos.find();
  ```

  3. Siga as orientações do passo anterior até finalizar todos os desafios e depois siga as instruções de como entregar o projeto, contidas na Orientação ➡️ 🤝 Depois de terminar o desenvolvimento (OPCIONAL).

  4. Para entregar o seu projeto você deve criar um _Pull Request_ neste repositório. Este _Pull Request_ deve conter os arquivos `desafio1.js`, `desafio2.js` e assim sucessivamente até o `desafio32.js`, no diretório `challenges`, que terá o código `MQL` de cada desafio, respectivamente.

  > **Caso você opte por não utilizar Docker para realizar os testes na sua máquina local**, é necessário que o clone do projeto seja realizado fora do diretório com nome `Área de Trabalho`. Isso quer dizer que, `Área de Trabalho` não pode estar no caminho do diretório onde o projeto foi clonado, pois o script que realiza os testes não consegue "encontrar" pastas que contenham espaços em seus nomes. Para checar se seu projeto está seguindo esse passo corretamente, utilize o comando `pwd` no terminal.

  ⚠️ **Restrições** ⚠️:

  - **Não use aspas simples para especificar campos e/ou valores**: quando for necessário usar aspas, use somente aspas duplas;

  - **Não use o comando `use commerce`**, pois os testes já se conectam automaticamente à base `commerce`.
  
  - **Todos os seus arquivos devem conter os nomes especificados aqui**:

  ```sh
  ./challenges/desafio1.js
  ./challenges/desafio2.js
  ./challenges/desafio{...}.js
  ./challenges/desafio31.js
  ./challenges/desafio32.js
  ```

</details>

<details>
  <summary>
    <strong>🗣 Nos dê feedbacks sobre o projeto!</strong>
  </summary><br>

  Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. **Leva menos de 3 minutos!**

  Link: [Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary>
    <strong>🗂 Compartilhe seu portfólio!</strong>
  </summary><br>

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Projeto Trybe Futebol CLube!

<h3> O `TFC` é um site informativo sobre partidas e classificações de futebol! </h3>

<br/>

## Descricao do Projeto

Projeto desenvolvido no bloco 28 - Modulo 3 - Desenvolvimento em BackEnd na turma 17 - Trybe. Conteudos aplicados: Typescript, POO, SOLID, Node, Camadas - arquitetura MSC, Api REST e Sequelize com Typescript.

<br/>

## Desenvolvimento

- Desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

- Construir **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Respeitando as regras de negócio providas no projeto e **sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto**.

- Para adicionar uma partida é necessário ter um _token_, portanto a pessoa deverá estar logada para fazer as alterações. 

- Tem um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

- O back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

Oservações: 

- O Frontend e o Docker Compose foi fornecido pela Trybe, criamos o DockerFile do Backend e Frontend e ajustamos as configuracoes do Docker Compose;
- O desenvolvimento de todo o projeto se encontra dentro da pasta `app/backend/src`.

<br/>

## Habilidades desenvolvidas

- A realização da dockerização dos apps, network, volume e compose;
- A modelagem de dados com MySQL através do Sequelize;
- A criação e associação de tabelas usando models do sequelize;
- A construção de uma API REST com endpoints para consumir os models criados;
- A construção de um CRUD com TypeScript, utilizando ORM,
- Aplicacao de testes de integracao com cobertura de 80%.

<br/>

## Tecnologias utilizadas

- Eslint;
- MongoDB;
- Javascript.

<br/>

## Colaboradores

Projeto realizado individualmente.

<br/>

## Status

Finalizado.

<br/>

## Desempenho

100% nos requisitos totais.

<br/>


# Requisitos

## Requisito Obrigatórios

### desafio 1 - Retorne a quantidade de documentos inseridos na coleção `produtos`

---

### desafio 2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos`

---

### desafio 3 - Retorne o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido

---

### desafio 4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente

---

### desafio 5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`

---

### desafio 6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`

---

### desafio 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista

---

### desafio 8 - Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco

---

### desafio 9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`

---

### desafio 10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`

---

### desafio 11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`

---

### desafio 12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`

1. Crie uma query que adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

---

### desafio 13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo

1. Crie uma query que adicione o campo `criadoPor` em todos os documentos, colocando `"Ronald McDonald"` no valor desse campo.

2. Crie uma query que retorne o `nome` e `criadoPor` de todos os produtos.

---

### desafio 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`

---

### desafio 15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo

1. Crie uma query que inclua o campo `avaliacao` do tipo `NumberInt`, com o valor `0` em todos os documentos da coleção.

2. Crie uma query que incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. 
👀**De olho na dica**: utilize como filtro o campo `tags`.

3. Crie uma query que incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

4. Crie uma query que retorne o `nome` e `avaliacao` de todos os sanduíches.

---

### desafio 16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`

1. Crie uma query que inclua somente ao sanduíche `Big Mac` o campo `ultimaModificacao` com a data corrente. Para a data corrente faça uso do tipo `date` ou `timestamp`.

2. Crie uma query que retorne o `nome` de todos os documentos em que o campo `ultimaModificacao` existe.

---

### desafio 17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`

1. Crie uma query que insira na coleção `resumoProdutos` um documento com os campos: `franquia` com o valor `McDonalds` e `totalProdutos` com o valor sendo a quantidade total de produtos registrados na coleção `produtos`.

2. Crie uma query que retorne os campos `franquia` e o `totalProdutos` da coleção `resumoProdutos`, resultantes da primeira query.

---

### desafio 18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`

1. Crie uma query que faça a inclusão de `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

---

### desafio 19 - Remova o item `cebola` de todos os sanduíches

1. Crie uma query que faça a remoção do item `cebola` em todos os sanduíches.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

---

### desafio 20 - Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`

1. Crie uma query que faça a remoção do **primeiro** `ingrediente` no sanduíche `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

---

### desafio 21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt`

1. Crie uma query que faça a remoção do **último** `ingrediente` no sanduíche `Cheddar McMelt`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

---

### desafio 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana

1. Crie uma query que inclua um campo `vendasPorDia` em todos os sanduíches. O valor deste campo deverá ser um _array_ com sete posições. Cada uma delas representará um dia da semana iniciando pelo domingo.

2. Crie uma query que incremente as vendas de `Big Mac` às **quartas-feiras** em `60`.

3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo `bovino` aos **sábados** em `120`.

4. Crie uma query que retorne o `nome` e `vendasPorDia` de todos os documentos.

---

### desafio 23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

1. Crie uma query que faça tanto a inserção dos valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches. Ordene os valores de `tags` em ordem alfabética ascendente.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

---

### desafio 24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente

1. Crie uma query que faça em todos os documentos a ordenação dos valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente. 

2. Crie uma query que retorne o `nome` e `valoresNutricionais` de todos os documentos.

---

### desafio 25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`

1. Crie uma query que faça a adição do valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

---

### desafio 26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`

1. Crie uma query que faça a adição do valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

---

### desafio 27 - Conte quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas

---

### desafio 28 - Conte quantos produtos têm `4` ingredientes

---

### desafio 29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos

1. Crie uma query que faça a renomeação do campo `descricao` para `descricaoSite` em todos os documentos.

2. Crie uma query que retorne o `nome` e `descricaoSite` de todos os documentos.

---

### desafio 30 - Remova o campo `curtidas` do item `Big Mac`

1. Crie uma query que faça a remoção do campo `curtidas` do item `Big Mac`.

2. Crie uma query que retorne o `nome` para todos os documentos e `curtidas` (exceto para `Big Mac`).

---

### desafio 31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`

---

### desafio 32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`

---