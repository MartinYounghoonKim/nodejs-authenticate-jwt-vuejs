const authRouter = require('./auth/index');
const boardRouter = require('./board/index');

module.exports = (app) => {
    app.use('/', authRouter);
    app.use('/board', boardRouter);
}