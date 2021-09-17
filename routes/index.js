const express = require('express');
const homeController  = require('../controllers/home_controller.js');

const router = express.Router();
router.get('/',homeController.home);
router.use('/student', require('./student'));
router.use('/teacher', require('./teacher'));

module.exports = router;