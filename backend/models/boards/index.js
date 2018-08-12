const database = require('../index');
const connection = database.connection();

exports.getBoard = (payload) => {
    const { index, upk } = payload;
    const sql = 'SELECT * FROM boards WHERE `index`=?';
    return new Promise((resolve, reject) => {
        connection.query(sql, [index], (err, result, fields) => {
            if (err) {
                return reject({
                    message: 'Something wrong in server.',
                    status: 501,
                });
            }
            const isExistResult = result.length > 0;
            if (!isExistResult) {
                // Result doesn't existed.
                reject({
                    status: 401,
                    message: 'Result is not existed.',
                });
            }
            if (result[0]['upk'] === upk) {
                // User have permission
                resolve({
                    status: 200,
                    message: 'Success',
                    data: result
                });
            } else {
                resolve({
                    status: 401,
                    message: 'The user is not authorized.',
                });
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
    const regdate = new Date;
    const { title, uid, upk, content } = payload;
    const sql = 'INSERT INTO boards (user, upk, title, content, regdate) VALUES (?, ?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
        connection.query(sql,[uid, upk, title, content, regdate], (err, result, fields) => {
            if (err) {
                reject({
                    data: {},
                    message: 'Something wrong in server',
                    status: 501,
                });
            } else {
                const index = result.insertId;
                resolve({
                    status: 200,
                    message: 'Success',
                    data: { upk, index, uid, title, content, regdate }
                });
            }
        })
    });
};

exports.updateBoard = (payload) => {
    const editdate = new Date;
    const { index, title, content } = payload;
    const sql = 'UPDATE boards SET title = ?, content = ?, editdate = ? WHERE `index` = ?';

    return new Promise((resolve, reject) => {
        connection.query(sql,[title, content, editdate, index], (err, result, fields) => {
            if (err) {
                reject({
                    data: {},
                    message: 'Something wrong in server',
                    status: 501,
                });
            } else {
                const index = result.insertId;
                resolve({
                    status: 200,
                    message: 'Success',
                    data: { title, content, editdate, index }
                });
            }
        })
    });
};

function selectBoardItem (index) {
    const sql = 'SELECT * FROM boards WHERE `index`=?';
    return new Promise((resolve, reject) => {
        connection.query(sql, [index], (err, result, fields) => {
            if (err) {
                return reject({
                    message: 'Something wrong in server.',
                    status: 501,
                });
            }
            const isExistResult = result.length > 0;
            if (!isExistResult) {
                // Result doesn't existed.
                reject({
                    status: 401,
                    message: 'Result is not existed.',
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
}