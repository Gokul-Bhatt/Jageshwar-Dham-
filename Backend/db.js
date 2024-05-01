const mongoose = require("mongoose");

 const URI = process.env.DB_URI; 

 const connectdb = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connected")
    } catch (error) {
        console.log("databases connection fail")
        process.exit(0);
    }
 }

 module.exports = connectdb