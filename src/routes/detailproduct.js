const express = require('express');
const getDetailProduct = require('../controllers/detailproduct.js');

const app = express();

app.get('/detailproduct', getDetailProduct)

module.exports =
    app
    ;
