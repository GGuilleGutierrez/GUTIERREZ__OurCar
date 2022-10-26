const express = require('express');
const getCart = require('../controllers/cart.js');

const app = express();

app.get('/cart', getCart)

module.exports =
    app
    ;
