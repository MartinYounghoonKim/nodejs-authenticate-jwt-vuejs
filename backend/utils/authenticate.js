const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'PERSONAL_STUDY1234!@#%';

exports.certifyPassword = (requestPassword, storedPassword) => {
    return bcrypt.compareSync(requestPassword, storedPassword);
};

exports.encryptPassword = (password) => {
    return bcrypt.hashSync(password, 10)
};

exports.generateSalt = () => {
    return bcrypt.genSaltSync(10);
};

exports.generateAccessToken = (information) => {
    return jwt.sign(information, secretKey, { expiresIn: '1d' });
};

exports.generateRefreshToken = (information) => {
    const { uid, password } = information;
    return jwt.sign({ uid }, secretKey + password, { expiresIn: '7d' });
};

exports.certifyAccessToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        })
    });
};

exports.decodedRefreshToken = (token, password) => {
    return new Promise((resolve, reject) => {
        const decoded = jwt.decode(token);
        console.log(decoded);
        resolve(decoded);
    });
};

exports.certifyRefreshToken = (token, password) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey + password, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        })
    });
};