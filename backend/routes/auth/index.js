const express = require('express');
const auth = express.Router();
const controller = require('./controller');

/* GET home page. */
auth.get('/', controller.tester);

module.exports = auth;
