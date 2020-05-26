const sendResponse = require('../utils').sendResponse;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('387c743f10284c50ad1d91fd94fd68cb'); // Since this is for test, Am not separating envs

module.exports = async (req, res) => {
    try {
        const response = await searchFunction(req.query.search);
        return res.render('landing', {
            value: 'New Reader App',
            result: response,
        })
    } catch (error) {
        return sendResponse(res, error.code || error.statusCode || 500, error.message || 'Internal Server Error');
    }
};

const searchFunction = async (query) => {
    return  newsapi.v2.everything({
        q: query,
        language: 'en',
        page: 2
    });
}
module.exports.searchFunction = searchFunction;
