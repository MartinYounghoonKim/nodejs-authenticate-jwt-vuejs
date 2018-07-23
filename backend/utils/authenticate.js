const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.certifyPassword = (requestPassword, storedPassword) => {
    return bcrypt.compareSync(requestPassword, storedPassword);
};

exports.encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10)
};

exports.generateJWTToken = (information) => {
    const secret_key = 'PERSONAL_STUDY1234!@#%';

    return jwt.sign(information, secret_key);
};