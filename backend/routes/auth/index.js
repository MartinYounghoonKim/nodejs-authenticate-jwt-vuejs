/**
 * @desc auth router
 */

const express = require('express');
const auth = express.Router();
const controller = require('./controller');

auth.get('/', controller.getUsers);
auth.post('/', controller.signin);

module.exports = auth;
