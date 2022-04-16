const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const exphbs = require('express-handlebars');

router.get('/test',(req, res) => {
    res.send('deu certo a importação');
})

router.get('/add',(req, res) => {
    res.render('add')
})

// detalhe da vaga
router.get('/view/:id', (req, res) => {
    Job.findOne({
        where: {id: req.params.id}
    }).then(job => {
        res.render('view', {
            job
        })
    }).catch(err => {console.log(err)})
})
// form da rota de envio

//add job via post request

router.post('/add', (req, res) => {

    let {title, salary, company, description, email, new_job} = req.body;

    Job.create({
        title, 
        salary, 
        company, 
        description, 
        email, 
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router