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

module.exports = authModel;
