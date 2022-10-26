const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log('escuchando en el puerto 3000'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.static('public'));

app.use(require('./routes/home'))

app.use(require('./routes/detailproduct'))

app.use(require('./routes/login'))

app.use(require('./routes/register'))

app.use(require('./routes/cart'))