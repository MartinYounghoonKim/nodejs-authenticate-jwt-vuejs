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
            const { status, message } = result;
            res.status(status)
                .json({ message });
        })
        .catch(err => {
            res.status(401)
                .json({ message: err });
        });
};