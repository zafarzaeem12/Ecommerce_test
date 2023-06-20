const orderModel = require('../Models/order')

const createOrders = async(req,res,next)=>{
    
    try{

        const newOrder = new orderModel({
            cart:req.body.cart,
            user:req.body.user
    
        })
        const data = await newOrder.save()
        res.send({
            message:"new order created successfully",
            status:201,
            data:data 
    
        })
    }
    catch(err){
        res.send({
            message:"new order created successfully",
            status:404,
             
    
        })
    }
        
}



const getOrderById = async(req,res,next)=>{
    const _id = req.params._id
    try{

        
        console.log(_id)
        const data = await orderModel.findById(_id)
        res.send({
            message:'Order fetched successfully ',
            status: 201,
            data :data 
        })
    }
    catch(err){
        res.send({
            message:'not get specific order ',
            status:404,
            data : data 
        })
    }
    
}



module.exports= { 
    createOrders,
    getOrderById,

}