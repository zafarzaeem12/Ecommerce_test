const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique : true
    },
    address:{
        type:String,
        required: true,
        unique : true
    },
    email:{
        type:String,
        required: true,
        unique : true
    },
    password:{
        type:String,
        required: true,
        unique : true
    },
    phone:{
        type:String,
        required: true,
        unique : true
    },
    avator:{
        type:String,
        required: true
    }
},
{timestamps:true}
) 

module.exports = mongoose.model('User',userModel)