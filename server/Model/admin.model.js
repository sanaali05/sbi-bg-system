import mongoose from "mongoose";

const  adminSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    userType:{
        type:String,
        require:true,
        trim:true
    },
    token:{
        type:String,
        trim:true
    }
})


const Admin = mongoose.model('Admin', adminSchema);
export default Admin;



