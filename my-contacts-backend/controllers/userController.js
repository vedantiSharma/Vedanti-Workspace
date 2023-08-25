const asyncHandler =require("express-async-handler");
//description GET all users
//route GET /api/contacts
//access public (initially)

const registerUser =  asyncHandler(async (req,res) =>{
    res.json({message : "register by user"});
});
 
//description GET all users
//route GET /api/contacts
//access public (initially)

const loginUser =  asyncHandler(async (req,res) =>{
    res.json({message : "login by user"});
});
 
//description GET all users
//route GET /api/contacts
//access public (initially)

const currentUsers =  asyncHandler(async (req,res) =>{
    res.json({message : "Current user information"});
});
 module.exports={loginUser ,registerUser ,currentUsers };