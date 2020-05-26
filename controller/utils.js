module.exports.sendResponse = (res, statusCode, data) => {
    if (statusCode >= 300 && statusCode < 400) {
        return res.status(statusCode).redirect(data);
    }
    if (typeof data === 'string') {
        data = {
            message: data
        };
    }
    return res.status(statusCode).send(data);
};
