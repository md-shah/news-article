const express = require('express');
const newsReaderRouter = express.Router();

const homeController = require('../controller/news-reader/home.new-reader');
const saveNewsController = require('../controller/news-reader/save.news-reader');
const searchNewsController = require('../controller/news-reader/search.news-reader');

// List random news and a Search bar
newsReaderRouter.get('/', homeController);
// Search News and Serve static
newsReaderRouter.get('/search', searchNewsController);
// Save news article in DB
newsReaderRouter.post('/save', saveNewsController);

module.exports = newsReaderRouter;
