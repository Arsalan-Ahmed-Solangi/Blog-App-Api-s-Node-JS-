const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
exports.update = async (req,res)=>{
    try {   

        if(req.body.id  == req.params.id){
            if(req.body.password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);

            }

            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})

            res.status(200).json({
                success:true,
                data:updateUser,
                message:"User updated successfully!"
            })
        }else{
            res.status(401).json({
                success:false,
                message:"You can update only your account!"
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}
exports.deleteUser = async (req,res)=>{
    try {   

        if(req.body.id  == req.params.id){
            
            const user = User.findById(req.params.id);
            if(!user){
                res.status(401).json({success:false,message:"User not found!"})
            }

            await Post.deleteMany({username:user.username})
            await User.findByIdAndDelete(req.params.id);
            
            res.status(200).json({
                success:true,
                message:"User Deleted successfully!"
            })
        }else{
            res.status(401).json({
                success:false,
                message:"You can update only your account!"
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

exports.getUser = async (req,res)=>{
    try {   

        if(req.body.id  == req.params.id){
            
            const user = await User.findById(req.params.id);
            if(!user){
                res.status(401).json({success:false,message:"User not found!"})
            }
            res.status(200).json({
                success:true,
                user:user,
                message:"User Fetched successfully!"
            })
        }else{
            res.status(401).json({
                success:false,
                message:"You can update only your account!"
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}