const mongoose = require("mongoose");
const validator = require("validator");

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        maxlength:[30,"Name cannot exceed 30 characters"],
        minlength:[4,"Name should have more than 5 characters"],
    },
    email:{
        type:String,
        required:[true,"Please Enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid Email"],
    },
    password:{
        type:String,
        required:[true,"Please Enter your password"],
        minlength:[4,"password should be greater than 8 characters"],
    }
})