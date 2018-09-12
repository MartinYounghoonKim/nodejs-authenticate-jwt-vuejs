const authModels = require('../../models/auth/index');

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
    const isInvalidRequest = !uid || !password || !role || !position;

    if (isInvalidRequest) {
        res.status(401)
            .json({
                data: {},
                message: 'This is not a valid request.'
            });
    }

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

exports.signout = (req, res, next) => {
    const { id } = req.body;

    authModels.signout(id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};

exports.certifyUser = (req, res, next) => {
    const token = req.headers['x-access-token'];
    authModels.certifyUser(token)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};

exports.reissuanceAccessToken = (req, res, next) => {
    const refreshToken = req.headers['x-refresh-token'];
    authModels.reissuanceAccessToken(refreshToken)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            const { status } = err;
            res.status(status)
                .json(err);
        });
};