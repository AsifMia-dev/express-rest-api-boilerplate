const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const middleware = require('./middleware');
const route = require('./routes');
const {notFoundHandler,errorHandler} = require('./error');

app.use(middleware);
//Router itself a middleware , so we can use it with app.use() method
app.use(route);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;