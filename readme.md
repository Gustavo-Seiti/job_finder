Job Finder
Introdução
Esse projeto foi desenvolvido durante o Curso da Alura de Node.js. Se trata de uma API que agenda atendimentos e serviços em um PetShop.

Se quiser testar a API, fizemos o deploy na plataforma Heroku.

Endereço: https://api-rest-petshop.herokuapp.com/atendimentos

Tecnologias
Nesse projeto utilizamos as seguintes tecnologias:

Node.js : Ambiente de execução de códigos JavaScript fora de um navegador;

Express : Framework web para Node.js;

Javascript : Linguagem leve, interpretada e orientada a objetos;

Mysql : Banco de dados relacional que utiliza SQL;

Heroku : Plataforma de nuvem para várias linguagens;

Requisitos
Node.js - Instalar pelo executável no site oficial;

Mysql - Mesmo instalando pelo executável, também é necessário instalar localmente no projeto via terminal;

$ npm install mysql
Express - Deve ser instalado via terminal;
$ npm install express
Consign - Deve ser instalado via terminal;
$ npm install consign
Postman - Instalar pelo executável no site oficial.
Banco de dados
Na primeira execução da aplicação ela verificará se a tabela agenda-petshop existe, se ainda não existir ela será criada.

Para configurar a conexao com seu Database abra o arquivo conexao.js e altere o que for necessário.

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '9608',
    database: 'agenda-petshop'
})
Rotas
Lista todos os atendimentos do banco de dados;

app.get("/atendimentos", (req, res) => {
    Atendimento.listar(res);
})
Seleciona o atendimento com o id informado na requisição:

app.get("/atendimentos/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    Atendimento.buscaPorId(id, res)
})
Cadastra novo atendimento no banco de dados:

app.post("/atendimentos", (req, res) => {
    const atendimento = req.body
    Atendimento.adicionar(atendimento, res)
})
Atualiza campos de atendimento existente:

app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body
    Atendimento.altera(id,valores, res)
})
Exclui atendimento do banco de dados:

app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.deleta(id, res)
})
Screenshot - Exemplo
Request GET no Postman passando parâmetro id = 5



Retorno de objeto JSON



Quer clonar esse repositório?
git clone https://github.com/Gustavo-Seiti/API_NODE.git