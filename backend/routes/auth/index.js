/**
 * @desc auth router
 */

const express = require('express');
const auth = express.Router();
const controller = require('./controller');

auth.get('/', controller.tester);

module.exports = auth;
