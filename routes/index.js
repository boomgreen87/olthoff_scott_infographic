const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    console.log('At the main route');

    let query = "SELECT ID FROM tbl_stats";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }
        console.log(result);
        res.render('home', { ID: result });
    })
})

router.get('/team/:id', (req, res) => {
    console.log('At player route');
    console.log(req.params.id); 

    let query = `SELECT * FROM tbl_stats WHERE ID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }
        console.log(result);
        res.json(result[0]);
    })
})

module.exports = router;