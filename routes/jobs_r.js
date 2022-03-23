const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/add', (req, res) => {

    let {title, slary, company, description, email, new_job} = req.body;
});