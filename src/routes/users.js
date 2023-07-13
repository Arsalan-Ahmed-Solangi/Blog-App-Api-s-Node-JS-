const express = require('express');
const { update, deleteUser, getUser } = require('../controllers/userController');
const jwt = require('jsonwebtoken');

const authenticateToken = require('../middlewares/authentication');
const router = express.Router();


//****UpdateUser******//
router.put('/:id',update);


//****DeleteUser******//
router.delete('/:id',deleteUser);


//****GetUser******//
router.get('/:id',authenticateToken,getUser);


module.exports = router;    