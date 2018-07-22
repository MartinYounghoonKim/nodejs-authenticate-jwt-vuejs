/**
 * @desc auth router
 */

const express = require('express');
const auth = express.Router();
const controller = require('./controller');

auth.get('/', controller.getUsers);
auth.post('/signin', controller.signin);
auth.post('/signup', controller.signup);
auth.delete('/signout', controller.signout);

module.exports = auth;
