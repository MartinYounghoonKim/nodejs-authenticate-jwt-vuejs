const database = require('../index');
const connection = database.connection();

exports.getBoard = (index) => {
    const sql = 'SELECT * FROM boards WHERE `index`=?';
    return new Promise((resolve, reject) => {
        connection.query(sql, [index], (err, result, fields) => {
            if (err) {
                reject({
                    data: {},
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
                        data: {}
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

exports.createBoard = () => {
    const sql = 'INSERT INTO boards (user, upk, content) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
        connection.query(sql,['Martin', 9, '테스트'], (err, result, fields) => {
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
