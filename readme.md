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

* [Sequelize](https://sequelize.org/) : Utilizado para mapear dados relacionais em objetos Javascript;

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
* Sequelize - Deve ser instalado via terminal;
```sh
$ npm sequelize
```
* Handlebars - Deve ser instalado via terminal;
```sh
$ npm install handlebars
```


## Resumo

Nesse projeto utilizamos o Handlebars para renderizar o HTML para o Front-End e passar os objetos (dataValues) que retornam do banco de dados após uma consulta ou inserção. Ainda no Front-End utilizamos CSS puro e o Bootstrap 5 para estilizar textos, imagens e menus.

Para fazer a conexão com o banco de dados SQLite, utilizamos o Sequelize e fizemos o mapeamento das tabelas relacionais em objetos Javascript.

Por último utilizamos uma Query CSS "@media" para dispositivos com telas menores, para que a página permanecesse responsiva e organizada mesmo em celulares.


## Screenshot - Exemplo

Página principal

<img src="https://user-images.githubusercontent.com/78318961/163689708-3a237a1c-14e7-4288-83e1-446d1c98fd2d.png">

Página de cadastro de vagas

<img src="https://user-images.githubusercontent.com/78318961/163689735-7f1e5778-08f6-4460-ba11-131cd127e42f.png">

Página principal - Celular

<img src="https://user-images.githubusercontent.com/78318961/163689806-f0f75c16-5e05-42b3-b1f9-1aa488fd9189.jpeg" width = 80% >

Página de cadastro de vagas - Celular

<img src="https://user-images.githubusercontent.com/78318961/163689910-ecc6f326-553e-4a67-abc9-82aa674f197f.jpeg" width = 80% >


## Quer clonar esse repositório?

```sh
git clone https://github.com/Gustavo-Seiti/job_finder.git

```





    

    

    

    

