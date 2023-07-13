const Category = require("../models/Category");

const bcrypt = require("bcrypt");
exports.create = async (req, res) => {
  try {
    const newPost = new Category(req.body);
    const savedPost = await newPost.save();

    res.status(200).json({
      success: true,
      message: "Category created successfully!",
      post: savedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
exports.updateCategory = async (req, res) => {
  try {

    const category = await Category.findById(req.params.id);
       
            const updateCategory = await Category.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json({
                success:true,
                message:"Category updated successfully!",
            })
       

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    res.status(200).json({
      success: true,
      category: category,
      message: "Category Fetched successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: false,
      categories: categories,
      message: "Categories Fetched Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    await category.delete();
    res.status(200).json({
      success: true,
      message: "Category Deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
