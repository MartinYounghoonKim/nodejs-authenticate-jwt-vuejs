module.exports = function (req, res, next) {
    const accessToken = req.headers['x-access-token'];
    if (!accessToken) {
        return res
            .status(400)
            .json({
                data: {},
                message: 'Required access token.'
            });
    }

};