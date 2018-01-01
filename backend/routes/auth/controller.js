const authModels = require('../../models/auth/index');

exports.getUsers = (req, res, next) => {
    authModels.getUsers(function(error, results) {
        res.json(results);
    });
}