const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("escuchando en el puerto 3000"));

app.get('/', (req, res) => {
    res.send("estoy en HOME")
})

app.get('/detailproduct', (req, res) => {
    res.send("estoy en DETAIL--PRODUCT")
})

app.get('/login', (req, res) => {
    res.send("estoy en LOGIN")
})

app.get('/register', (req, res) => {
    res.send("estoy en REGISTER")
})

app.get('/cart', (req, res) => {
    res.send("estoy en CART")
})