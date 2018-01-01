const mysql = require('mysql');
const databaseConfig = require('../config/database.config');

module.exports = (() => {
    return {
        connect () {
            return databaseConnection = mysql.createConnection(databaseConfig);
        }
    }
})();