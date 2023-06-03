import mongoose from "mongoose";

const Schema = mongoose.Schema

const User = new Schema({
    username:{
        type:String, 
        require:true
    },
    name:{
        type:String,
        require:true
    },
    password:{
        type:String, 
        require:true
    },
    role:{
        type:String, 
        require: true
    },
    reserword:{
        type:String, 
        requiere: true
    }
})

export const modeloUser = mongoose.model('user', User)