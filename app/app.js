const express = require('express');
const app = express();

const GpioController = require('./gpio/GpioController');

app.use('/gpio', GpioController);

module.exports = app;
