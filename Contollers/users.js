const userModel = require('../Models/users')
const CryptoJS = require("crypto-js");
const Login_Token_Authentication = require('../Middleware/loginJwt')

const createUser = async (req,res,next) => {
try{
    const filename = req.file.path;
    const files = `${filename}`.replace("public","")

        const newUser = new userModel({
            username: req.body.username,
            address: req.body.address,
            email: req.body.email,
            password:  CryptoJS.AES.encrypt(req.body.password, process.env.Secret_password ).toString(),
            phone: req.body.phone,
            avator: `${files}`?.replace(/\\/g, "/"),
        });
        const datas = await newUser.save();
        res.send({
            message:"Customer created successfully",
            status:201,
            data : datas
        })
}catch(err){
    res.send({
        message:"Customer Not found",
        status:404
    })
}
}
const LoginUser = async (req,res,next) => {
    try{
        const type_email = req.body.email
        const type_password = req.body.password
        console.log(type_email , type_password)
        const data = await userModel.findOne({ email : type_email });
        const show_password = CryptoJS.AES.decrypt(data?.password,  process.env.Secret_password);
        const original_password = show_password.toString(CryptoJS.enc.Utf8);
        type_email == data.email && type_password == original_password  ?
        res.send( {message:"token generated", status:201 ,data :  Login_Token_Authentication(data , '1h') })   :
        res.send( {message:"token not found",status:404} )

    }catch(err){
        res.send({
            message:"No User found",
            status:404
        })
    }
    
}


module.exports= { 
    createUser,
    LoginUser
}