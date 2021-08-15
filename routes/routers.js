const express = require("express");
const router = express.Router();
var book_controller = require('../controllers/bookController');

router.get('/', book_controller.index);
router.get('/list', book_controller.post_list);
router.get('create/', book_controller.create_post);
router.get('update/', book_controller.post_update);
router.get('edit/', book_controller.post_edit);
router.get('delete/', book_controller.post_delete);

module.exports = router;