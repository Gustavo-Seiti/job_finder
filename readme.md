# Job Finder

## Introdução

Esse projeto foi desenvolvido durante o Curso de Javascript do Matheus Batisti na Udemy. Se trata de um site de cadastro e busca de empregos de tecnologia.

Se quiser ver o projeto online acesse: 

Endereço: https://job-tech-finder.herokuapp.com


## Tecnologias

Nesse projeto utilizamos as seguintes tecnologias:


* [Node.js](https://nodejs.dev/) : Ambiente de execução de códigos JavaScript fora de um navegador;

* [Express](https://expressjs.com/) : Framework web para Node.js;

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) : Linguagem leve, interpretada e orientada a objetos;

* [SQLite](https://www.sqlite.org/index.html) : Banco de dados relacional que utiliza SQL;

* [Heroku](heroku.com) : Plataforma de nuvem para várias linguagens;


## Requisitos

* Node.js - Instalar pelo executável no [site oficial](https://nodejs.dev/learn/how-to-install-nodejs);

* SQLite - Deve ser instalado via terminal;
```sh
$ npm install sqlite3
```
* Express - Deve ser instalado via terminal;
```sh
$ npm install express
```
* Handlebars - Deve ser instalado via terminal;
```sh
$ npm install handlebars
```


## Banco de dados

Na primeira execução da aplicação ela verificará se a tabela agenda-petshop existe, se ainda não existir ela será criada.

Para configurar a conexao com seu Database abra o arquivo conexao.js e altere o que for necessário.

```sh
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '9608',
    database: 'agenda-petshop'
})
```


## Rotas


Lista todos os atendimentos do banco de dados;
```sh
app.get("/atendimentos", (req, res) => {
    Atendimento.listar(res);
})
```

Seleciona o atendimento com o id informado na requisição:
```sh
app.get("/atendimentos/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    Atendimento.buscaPorId(id, res)
})
```

Cadastra novo atendimento no banco de dados:
```sh
app.post("/atendimentos", (req, res) => {
    const atendimento = req.body
    Atendimento.adicionar(atendimento, res)
})
```
Atualiza campos de atendimento existente:
```sh
app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body
    Atendimento.altera(id,valores, res)
})
```
Exclui atendimento do banco de dados:
```sh
app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.deleta(id, res)
})
```

## Screenshot - Exemplo

Request GET no Postman passando parâmetro id = 5

<img src="https://user-images.githubusercontent.com/78318961/154263155-a0650ad2-14ba-4a63-b140-2b7e14b905d0.png">

Retorno de objeto JSON

<img src="https://user-images.githubusercontent.com/78318961/154263234-d061636e-38d1-46e7-ac58-8af11c93be55.png">


## Quer clonar esse repositório?

```sh
git clone https://github.com/Gustavo-Seiti/API_NODE.git

```





    

    

    

    

