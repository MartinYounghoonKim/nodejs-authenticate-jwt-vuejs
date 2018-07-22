const authModels = require('../../models/auth/index');

exports.getUsers = (req, res, next) => {
    authModels.getUsers(function(error, results) {
        res.json(results);
    });
};

exports.signin = (req, res, next) => {
    const { uid, password } = req.body;
    const isInvalidRequest = !uid || !password;

    if (isInvalidRequest) {
        res.status(401)
            .json({ message: 'This is not a valid request.' });
    }

    authModels.signin({ uid, password })
        .then(result => {
            const { status } = result;
            res.status(status)
                .json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};
exports.signup = (req, res, next) => {
    const { uid, password, role, position } = req.body;

    authModels.signup({ uid, password, role, position })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};