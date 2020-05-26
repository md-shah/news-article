const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const useragent = require('express-useragent');

const dbConnection = require('./bin/db-connection');
dbConnection;
const newsReaderRoute = require('./routes/newsReaderApp');

const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(useragent.express());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', newsReaderRoute);

module.exports = app;
