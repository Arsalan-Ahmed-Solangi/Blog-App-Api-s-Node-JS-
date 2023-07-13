const express = require('express');
const { create, update, getPost,getAll,deletePost, updatePost, getPOst } = require('../controllers/postController');
const router = express.Router();


//****create******//
router.post('/',create);

//****update******//
router.put('/:id',updatePost);


//****Delete******//
router.delete('/:id',deletePost)

//****Get******//
router.get('/:id',getPOst);


//****GetAll******//
router.get('/',getAll);


module.exports = router;    