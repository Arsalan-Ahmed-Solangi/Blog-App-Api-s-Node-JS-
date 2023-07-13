//****ImportPackages******//
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors = require('colors');   
const connectDB = require('./config/database');
const multer = require('multer');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');


//****Initializes*****//
const app = express();
const port = process.env.PORT || 4000;

//****DatabaseConnection****//
connectDB();

//*****Middlewares*****//
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin you want to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


//****Initialize Routes****//
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);
app.use("/api/category",categoryRoutes);


//****ImageStoragePath*****//
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,);
    }
})
const upload = multer({
    storage:storage
});


app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json({success:true,message:"File has been uploaded!"});
})

//*****Listen Port******//
app.listen(port,()=>{
    console.log(`Listening on port No ${port}`.bgYellow.white);
})