const mysql = require('mysql');
const databaseConfig = require('../config/database.config');

module.exports = (() => {
    return {
        connection () {
            return mysql.createConnection(databaseConfig);
        }
    }
})();