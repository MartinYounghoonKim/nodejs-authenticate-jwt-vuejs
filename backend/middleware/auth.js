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
            next();
        })
        .catch(err => {
            console.log(err);
            return res.send('fail');
        });
};