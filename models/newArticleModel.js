const mongoose = require('mongoose');

const newArticleSchema = new mongoose.Schema({
    newArticle: Object
}, {
    timestamps: true
});

module.exports.newArticleModel = mongoose.model('NewsArticle', newArticleSchema);
