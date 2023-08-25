const mongoose = require("mongoose");

const contactSchema= mongoose.Schema({
    name:{
        type: String,
        requried:[true , "Please enter the name "],

    },

    email:{
        type: String,
        required:[true , "please enter the email id"],

    },

    phone:{
        type: String,
        requried:[true , "please enter the phone number"]

    },
},
{
    timestamp : true,
});


module.exports= mongoose.model("Contact", contactSchema);