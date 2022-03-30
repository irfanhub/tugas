const express = require('express');

const product = require('./routes/product');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const handlingError = require('./error/handlingError');
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/produk', product);

app.set('view engine', 'ejs');

app.use(handlingError);


module.exports = app;