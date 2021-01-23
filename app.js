const express = require('express');
const app = express();
const cal = require('./calculator');

app.get('/add', (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({
        result: cal.add(a, b)
    });
})

app.get('/sub', (req, res) => {
    let a = parseInt(req.query.a);
    let b = parceInt(req.query.b);
    res.json({
        result: cal.subtrack(a, b)
    });
})

module.exports = app