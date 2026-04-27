var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

var app = express();


app.use(express.json());

// käytetään routeja
app.use('/', indexRouter);

module.exports = app;