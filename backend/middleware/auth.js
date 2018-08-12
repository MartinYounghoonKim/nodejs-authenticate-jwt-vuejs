const authenticateUtils = require('../utils/authenticate');

module.exports = function (req, res, next) {
    const accessToken = req.headers['x-access-token'];
    if (!accessToken) {
        // Check access token existed.
        return res
            .status(400)
            .json({
                data: {},
                message: 'Required access token.'
            });
    }
    return authenticateUtils.certifyAccessToken(accessToken)
        .then(result => {
            req.body.uid = result.uid;
            req.body.upk = result.upk;
            next();
        })
        .catch(err => {
            const status = 401;
            const message = err.message;
            return res
                .status(status)
                .send({ status, message });
        });
};