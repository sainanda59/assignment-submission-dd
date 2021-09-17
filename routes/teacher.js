const express = require('express');
const teacherContoller  = require('../controllers/teacher_controller.js');

const router = express.Router();
router.get('/',teacherContoller.signIn);
router.post('/signIn',teacherContoller.Login);

module.exports = router;