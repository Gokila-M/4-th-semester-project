import mongoose from "mongoose";

const user =  new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },   
    mobileNo:{
        type:Number,
        required: true,
    
    },
    password:{
        type:String,
        required: true,
    },
    isBlock:{
        type:Boolean,
        default:false
    },
    isOwner:{
        type:Boolean,
        default:false
    },
    
    
},  {
    timestamps: true
}
)

const validateUser=(user)=>{    
    let email=user.email
    let phone=user.mobileNo
    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/.test(email)){
        return {error:"invalid email"}
    }
    if(!/^[0-9]{10}$/.test(phone)){
        return {error:"invalid phone number"}
    }
}

export {validateUser}

const User=mongoose.model('User',user)
export default User;