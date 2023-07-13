const Post = require('../models/Post');

const bcrypt = require('bcrypt');
exports.create = async (req,res)=>{
    try {   
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();

        res.status(200).json({
            success:true,
            message:"Post created successfully!",
            post:savedPost
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}
exports.updatePost = async (req,res)=>{
    try {   
       
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){

            const updatePost = await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json({
                success:true,
                message:"Post updated successfully!",
            })
        }else{
            res.status(500).json({
                success:false,
                message:"You can only update your post",
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

exports.getPOst = async (req,res)=>{
    try {   
       
        const post = await Post.findById(req.params.id);
      
        res.status(200).json({
            success:true,
            post:post,
            message:"Post Fetched successfully!",
        })
   

    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

exports.getAll = async (req,res)=>{
    try {   
        const username = req.query.user || "";
        const category  = req.query.category || "";

        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(category){
            posts = await Post.find({categories:{
                $in:[category]
            }})
        }else{
            posts = await Post.find();
        }

        res.status(200).json({
            success:true,
            message:"Posts fetched successfully!",
            posts:posts,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

exports.deletePost = async (req,res)=>{
    try {   
       
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){

            await post.delete();
            res.status(200).json({
                success:true,
                message:"Post Deleted successfully!",
            })
        }else{
            res.status(500).json({
                success:false,
                message:"You can only delete your post",
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}