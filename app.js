const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

app.listen(PORT, () => {
    console.log("O Express está rodando na porta 3000");
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));


// handlebars 
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco de dados com sucesso")
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar ", err);
    });

app.get('/', (req, res) => {

    let  search   = req.query.job; // isso aqui é exatamente a palavra que vem da barra de pesquisa
    let query = '%' + search + '%'; // esse é a palavra pronta para a query
   
    
    if(!search){
        Job.findAll({order:[
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index',{
                jobs
            });
        })
        .catch(err => {console.log(err);
        })

    }else{

        Job.findAll({
            where: {title: {[Op.like]: query}},
            order:[
            ['createdAt', 'DESC']
        ]})
        .then(jobs => {
            res.render('index',{
                jobs, search
            });
        })
        .catch(err => {console.log(err);
        })

    }
    
    
    
})

// jobs routers

app.use('/jobs', require('./routes/jobs_r'));
