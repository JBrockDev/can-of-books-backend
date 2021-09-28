'use strict';
const routes = require('./routes');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', routes.getAllBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
