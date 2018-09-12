/**
 * @desc auth model
 */
const database = require('../index');
const connection = database.connection();
const authenticateUtils = require('../../utils/authenticate');
// const redisUtils = require('../../utils/redis');

exports.signin = (information) => {
    const { uid, password } = information;
    const sql = `SELECT * FROM users WHERE user = ?`;

    return new Promise((resolve, reject) => {
        connection.query(sql, [uid], (err, result, fields) => {
            if (err) {
                reject({
                    data: {},
                    message: 'Something wrong in server',
                    status: 501,
                });
            }
            if (result === undefined) {
                reject({
                    status: 401,
                    data: {},
                    message: 'User information isn`t exist.'
                });
            } else {
                const isMatchPassword = authenticateUtils.certifyPassword(password, result[0].password);

                if (isMatchPassword) {
                    const upk = result[0].index;
                    const { role, position, password } = result[0];
                    const accessToken = authenticateUtils.generateAccessToken({ uid, upk, role, position });
                    const refreshToken = authenticateUtils.generateRefreshToken({ uid, password });

                    resolve({
                        status: 200,
                        data: {
                            uid,
                            role,
                            position,
                            accessToken,
                            refreshToken
                        },
                        message: 'User information matched.'
                    });
                } else {
                    reject({
                        status: 401,
                        data: {},
                        message: 'User information isn`t matched.'
                    });
                }
            }
        })
    });
};

exports.signup = (information) => {
    const { uid, password, role, position } = information;
    const selectSql = `SELECT * FROM USERS WHERE user = ?`;
    const insertSql = `INSERT INTO users (user, password, role, position) VALUES (?, ?, ?, ?);`;

    return new Promise((resolve, reject) => {
        connection.query(selectSql, [uid], (err, result, fields) => {
            if (err) {
                reject({
                    data: {},
                    message: 'Something wrong in server',
                    status: 501,
                });
            }

            if (result.length > 0) {
                reject({
                    status: 401,
                    data: {},
                    message: 'User id is already exist.'
                });
            } else {
                resolve();
            }
        });
    }).then(() => {
        const encryptedPassword = authenticateUtils.encryptPassword(password);
        return new Promise((resolve, reject) => {
            connection.query(insertSql, [uid, encryptedPassword, role, position], (err, result, fields) => {
                if (err) {
                    reject({
                        data: {},
                        message: 'Something wrong in server',
                        status: 501,
                    });
                } else {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: {}
                    });
                }
            });
        });
    })
};

exports.signout = (id) => {
    const sql = 'DELETE FROM users WHERE `index`=?';
    return new Promise((resolve, reject) => {
        connection.query(sql, id, (err, result, fields) => {
            if (err) {
                reject({
                    data: {},
                    message: 'Something wrong in server',
                    status: 501,
                });
            } else {
                resolve({
                    status: 200,
                    message: 'Success',
                    data: {}
                });
            }
        })
    });
};

exports.certifyUser = (token) => {
    return authenticateUtils.certifyAccessToken(token)
        .then(res => {
            return Promise.resolve({
                status: 200,
                data: res,
                message: 'Success',
            });
        })
        .catch(err => {
            return Promise.reject({
                data: {},
                message: 'This token is invalid.',
                status: 401,
            });
        });
};

exports.reissuanceAccessToken = (refreshToken) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users WHERE user = ?`;
        authenticateUtils.decodedRefreshToken(refreshToken)
            .then(res => {
                connection.query(sql, [res.uid], (err, result, fields) => {
                    if (err) {
                        reject({
                            data: {},
                            message: 'Something wrong in server',
                            status: 501,
                        });
                    } else {
                        const { user: uid, index: upk, password, role, position } = result[0];
                        authenticateUtils.certifyRefreshToken(refreshToken, password)
                            .then(res => {
                                const accessToken = authenticateUtils.generateAccessToken({ uid, upk, role, position });
                                resolve({
                                    status: 200,
                                    message: 'Success',
                                    data: {
                                        accessToken
                                    }
                                });
                            })
                            .catch(err => {
                                reject({
                                    status: 400,
                                    message: 'It`s invalid token.'
                                });
                            });
                    }
                });
            });
    });
};