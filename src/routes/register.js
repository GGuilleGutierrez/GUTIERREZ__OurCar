const express = require('express');
const getRegister = require('../controllers/register.js');

const app = express();

app.get('/register', getRegister)

module.exports =
    app
    ;
