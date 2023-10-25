const express = require('express');
const path = require('path');
const logger = require('morgan');
const indexRouter = require('./routes/index');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'));

// Routes
app.use('/', indexRouter);

// Error handler
app.use(function(err, req, res, next) {
  // Handle errors as needed
});

module.exports = app;
