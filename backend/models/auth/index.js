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
                reject(err);
            } else {
                if (result[0].password === password) {
                    resolve({
                        status: 200,
                        message: 'User information matched.'
                    });
                } else {
                    resolve({
                        status: 401,
                        message: 'User information isn`t matched.'
                    });
                }
            }
        })
    });
};

// module.exports = authModel;
