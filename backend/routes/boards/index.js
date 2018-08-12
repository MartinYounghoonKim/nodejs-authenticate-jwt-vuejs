/**
 * @desc board router
 */

const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authMiddleware = require('../../middleware/auth');
const permissionMiddleware = require('../../middleware/permission');

router.use(authMiddleware);
// router.use(['/', '/:index'], permissionMiddleware);

router.get('/:index', controller.getBoard);
router.get('/', controller.getBoards);
router.post('/', controller.createBoard);
router.put('/:index', controller.updateBoard);
router.delete('/:index', controller.deleteBoard);

module.exports = router;
