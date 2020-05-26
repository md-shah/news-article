const sendResponse = require('../utils').sendResponse;
const searchNews = require('./search.news-reader').searchFunction;
module.exports = async (req, res) => {
    try {
        const newArticle = await searchNews(req.query.search || 'nodejs')
        return res.render('landing', {
            value: 'New Reader App',
            result: newArticle,
        })
    } catch (error) {
        return sendResponse(res, error.code || error.statusCode || 500, error.message || 'Internal Server Error');
    }
};
