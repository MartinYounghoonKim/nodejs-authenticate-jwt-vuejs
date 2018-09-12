const PROCESS_ENV = process.env;

module.exports = {
    host: PROCESS_ENV.DB_HOST,
    user: PROCESS_ENV.DB_USER,
    password: PROCESS_ENV.DB_PASSWORD,
    port: PROCESS_ENV.DB_PORT,
    database: PROCESS_ENV.DB_DATABASE
};
