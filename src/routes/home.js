const express = require('express');
const getHome = require('../controllers/home.js');

const app = express();

app.get('/home', getHome)

module.exports =
    app
    ;
