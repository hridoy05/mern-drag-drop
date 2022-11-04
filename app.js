const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const numberRouter = require('./routes/numberRoutes')

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use('/', numberRouter)


module.exports = app;