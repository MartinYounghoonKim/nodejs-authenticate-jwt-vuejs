const database = require('../index');
const connection = database.connection();

exports.getBoard = (index) => {
    const sql = 'SELECT * FROM boards WHERE `index`=?';
    return new Promise((resolve, reject) => {
        connection.query(sql, [index], (err, result, fields) => {
            if (err) {
                reject({
                    message: 'Something wrong in server.',
                    status: 501,
                });
            } else {
                const isExistResult = result.length > 0;
                if (isExistResult) {
                    resolve({
                        status: 200,
                        message: 'Success',
                        data: result
                    });
                } else {
                    reject({
                        status: 401,
                        message: 'Result is not existed.',
                    });
                }

            }
        })
    });
};

exports.getBoards = () => {
    const sql = 'SELECT * FROM boards';
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result, fields) => {
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
                    data: result
                });
            }
        })
    });
};

exports.createBoard = (payload) => {
    const { title, uid, upk, content } = payload;
    const sql = 'INSERT INTO boards (user, upk, title, content) VALUES (?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
        connection.query(sql,[uid, upk, title, content], (err, result, fields) => {
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
                    data: result[0]
                });
            }
        })
    });
};
