const express = require('express');
const router = express.Router();

const auth = require('./auth/index');
const board = require('./boards/index');

router.use('/auth', auth);
router.use('/board', board);

module.exports = router;
