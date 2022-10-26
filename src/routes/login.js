const express = require('express');
const getLogin = require('../controllers/login.js');

const app = express();

app.get('/login', getLogin)

module.exports =
    app
    ;
