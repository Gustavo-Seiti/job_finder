const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test',(req, res) => {
    res.send('deu certo a importação');
})

router.get('/add',(req, res) => {
    res.render('add');
})
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