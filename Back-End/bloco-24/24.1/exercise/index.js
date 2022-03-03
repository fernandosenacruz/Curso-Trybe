const express = require('express');
const bodyParser = require("body-parser");

const bookController = require('./controllers/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/book', bookController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));