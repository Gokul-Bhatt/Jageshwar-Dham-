const User = require("../model/user-model")
const Contact = require("../model/contactModel")



const getAllUsers = async(req,res)=>{
try {
    const users = await User.find();
    console.log(users)
    if(!users || users.length === 0 ){
        return res.status(404).json({message:"No User Found"});
    }
   return res.status(200).json(users)
} catch (error) {
    console.log(error)
}
};

const dalateUserById = async(req,res)=>{
        try {
            const id = req.params.id;
            await User.deleteOne({_id:id});
            return res.status(200).json({msg:"user deleted"})
        } catch (error) {
           console.log(error) 
        }
};



const getAllContact = async(req,res)=>{
    try {
        const contact = await Contact.find();
        console.log(contact)
        if(!contact || contact.length === 0){
            return res.status(404).json({message:"no user found"})
        }
        return res.status(200).json(contact)
    } catch (error) {
        console.log(error)
    }
};

const deletecontactById = async(req,res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({msg:"user deleted"})
    } catch (error) {
        console.log(error);
        
    }
}



module.exports = {getAllUsers, getAllContact,dalateUserById,deletecontactById};