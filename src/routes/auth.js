const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();


//****RegisterAPI******//
router.post('/register',register);


//****LoginAPI******//
router.post('/login',login);

module.exports = router;    