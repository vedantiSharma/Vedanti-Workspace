const express = require("express");
const { 
     registerUser,
     loginUser ,
     currentUsers } = require("../controllers/userController");

const router = express.Router();
//register
router.post("/register" , registerUser);

//login
router.post("/login" , loginUser);


//currrent user information 
router.get("/current" , currentUsers);







module.exports= router;