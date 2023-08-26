const express = require("express");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const User = require("../models/userModel")


//description REGISTER all users
//route GET /api/contacts
//access public (initially)

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email }); //here ({email}) is declared as object
    if (userAvailable) {
        res.status(400);
        throw new Error("User is already registerd");
    }

    //if yes then we use HASH pasword , becoz pw cannot be stored direct in DB
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hash password:", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(` user created ${user}`)
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else {
        res.status(400);
        throw new Error("User data is not valid");
    }


    res.json({ message: "register by user" });
});

//description LOGIN all users
//route GET /api/contacts
//access public (initially)

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("All field are mandatory");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                }
            }
        )
            ;
    }


    res.json({ message: "login by user" });
});

//description CURRRENT users info.
//route GET /api/contacts
//access public (initially)

const currentUsers = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information" });
});
module.exports = { loginUser, registerUser, currentUsers };