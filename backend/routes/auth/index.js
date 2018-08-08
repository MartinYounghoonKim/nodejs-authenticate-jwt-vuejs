/**
 * @desc auth router
 */

const express = require('express');
const auth = express.Router();
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');

// auth.use(authMiddleware);

auth.get('/', controller.getUsers);
auth.get('/me', controller.certifyUser);
auth.post('/signin', controller.signin);
auth.post('/signup', controller.signup);
auth.delete('/signout', controller.signout);

module.exports = auth;
