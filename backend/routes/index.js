const express = require('express');
const router = express.Router();

const auth = require('./auth/index');
const board = require('./board/index');

router.use('/', auth);
router.use('/board', board);

module.exports = router;
