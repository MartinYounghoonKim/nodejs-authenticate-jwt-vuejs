const mysql = require('mysql');
const databaseConfig = require('../config/mysql.config');

module.exports = (() => {
    return {
        connection () {
            return mysql.createConnection(databaseConfig);
        }
    }
})();