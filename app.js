const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const PORT = 3000;

app.listen(PORT, () => {
    console.log("O Express está rodando na porta 3000");
});

app.use(bodyParser.urlencoded({ extended: false }));

db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco de dados com sucesso")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar ", err);
    });

app.get('/', (req, res) => {
    res.send("Tá funcionando mano, primeira rota get!")
const db = require('./db/connection')
})