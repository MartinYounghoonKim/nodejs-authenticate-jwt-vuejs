/**
 * @desc auth model
 */
const database = require('../index');
const bcrypt = require('bcrypt');
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
                if (bcrypt.compareSync(password, result[0].password)) {
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
        const encryptedPassword = bcrypt.hashSync(password, 10);
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
