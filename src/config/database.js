const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log(`Database Connected  ${mongoose.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`Database Exception :  ${error}`.bgRed.white)
    }
}


module.exports = connectDB