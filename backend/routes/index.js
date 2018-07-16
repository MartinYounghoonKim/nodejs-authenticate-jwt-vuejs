const express = require('express');
const router = express.Router();

const auth = require('./auth/index');

router.use('/', auth);

module.exports = router;
