const express = require("express");
const route = express.Router();
const User = require("../model/user-model");
const Cuser = require("../model/contactModel");


// will create two route for one is register while bookimg the puja and one is while contact form

const home = async(req, res)=>{
    try {
        res.status(200).send("server is runing using controllers ")
    } catch (error) {
        console.log(error)
    }
};



const register = async(req, res)=>{
    try {
        console.log(req.body);
        const {username, email, phone,date,time,puja} = req.body;
        const userCreated = await User.create({username, email, phone,date,time,puja})
        res.status(201).json({msg:userCreated,token: await userCreated.generateToken(), userId: userCreated._id.toString(),});
    } catch (error) {
        res.status(500).json(error);
    }
};

const contact = async(req, res)=>{
    try {
        const {username,phone,message}= req.body;
        const userCreated = await Cuser.create({username,phone,message})
        res.status(200).send({msg: userCreated,tiken: await userCreated.generateToken(),userId: userCreated._id.toString(),})
    } catch (error) {
        res.status(500).json(error);
    }
}


const user = async (req,res)=>{
    try {
        const userData = (req.user);
        console.log(userData);
        return res.status(200).json({msg:userData});
    } catch (error) {
        console.log("error from root or controller");
    }
}


module.exports = {home,register,contact,user};