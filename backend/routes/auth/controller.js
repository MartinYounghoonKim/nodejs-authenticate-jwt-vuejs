exports.tester = (req, res, next) => {
    let inquerySql = 'SELECT * FROM board123';
    res.send(inquerySql)
}