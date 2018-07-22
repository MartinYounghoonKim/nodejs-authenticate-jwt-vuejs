/**
 * @desc auth router
 */

const express = require('express');
const auth = express.Router();
const controller = require('./controller');

auth.get('/', controller.getUsers);
auth.post('/', controller.signin);
auth.post('/signup', controller.signup);

module.exports = auth;
