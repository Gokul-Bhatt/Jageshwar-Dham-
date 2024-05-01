const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    
})


userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            isAdmin: this.isAdmin
        },
    process.env.JWT_KEY,
    {
        expiresIn: "30d",
    }
);
    } catch (error) {
        console.log(error)
    }
}
const Contact = new mongoose.model("contact", userSchema);
module.exports = Contact;