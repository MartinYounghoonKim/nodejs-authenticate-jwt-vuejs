/**
 * @desc auth model
 */
const database = require('../index');
const connection = database.connection();

const authModel = {
    getUsers: function(callback) {
        return connection.query('select * from users', callback);
    }
};

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
            if (result.length === 0) {
                reject({
                    status: 401,
                    data: {},
                    message: 'User information isn`t exist.'
                });
            } else {
                if (result[0].password === password) {
                    resolve({
                        status: 200,
                        data: {},
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
        return new Promise((resolve, reject) => {
            connection.query(insertSql, [uid, password, role, position], (err, result, fields) => {
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
        })
    })
};
