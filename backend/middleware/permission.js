const authenticateUtils = require('../utils/authenticate');

module.exports = function (...permission) {
    const isAllowed = role => permission.indexOf(role) > -1;
    return (req, res, next) => {
        const accessToken = req.headers['x-access-token'];
        if (accessToken && isAllowed(req.user.role))
            next();
        else {
            // user is forbidden
        }
    };
};