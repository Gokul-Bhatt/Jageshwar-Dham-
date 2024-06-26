const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    puja:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
})

userSchema.methods.generateToken = async function(){
        try {
            return jwt.sign({
                userId: this._id.toString(),
                email: this.email,
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
};

const User = new mongoose.model("User",userSchema)
module.exports = User;