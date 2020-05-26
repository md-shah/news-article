const sendResponse = require('../utils').sendResponse;
const newArticleModel = require('../../models/newArticleModel').newArticleModel;

module.exports = async (req, res) => {
    const requestBody = req.body;
    try {
        const newsArticleData = new newArticleModel({requestBody});
        await newsArticleData.save();
        return sendResponse(res, 200, "Article Saved");
    }
    catch (error) {
        return sendResponse(res, error.code || error.statusCode || 500, error.message || 'Internal Server Error');
    }
};
