const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    console.log('At the main route');
    res.render('home', {title: 'Wayne Gretzky'} );
})

module.exports = router;