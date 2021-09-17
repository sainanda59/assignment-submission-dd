const express = require('express');
const studentContoller  = require('../controllers/student_controller.js');

const router = express.Router();
router.get('/',studentContoller.subPage);
module.exports = router;