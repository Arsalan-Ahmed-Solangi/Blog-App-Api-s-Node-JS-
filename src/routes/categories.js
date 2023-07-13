const express = require('express');
const { create, getCategory,getAll,deleteCategory, updateCategory } = require('../controllers/categoryController');
const router = express.Router();


//****create******//
router.post('/',create);

//****update******//
router.put('/:id',updateCategory);

//****Delete******//
router.delete('/:id',deleteCategory)

//****Get******//
router.get('/:id',getCategory);

//****GetAll******//
router.get('/',getAll);


module.exports = router;    