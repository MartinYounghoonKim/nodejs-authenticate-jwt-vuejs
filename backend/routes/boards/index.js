/**
 * @desc board router
 */

const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');

// auth.use(authMiddleware);

router.get('/', controller.getBoards);
router.get('/:index', controller.getBoard);
router.post('/', controller.createBoard);
router.put('/:index', controller.updateBoard);
router.delete('/:index', controller.deleteBoard);

module.exports = router;
