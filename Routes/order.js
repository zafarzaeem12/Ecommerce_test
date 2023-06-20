const OrderRouter = require('express').Router()


const {
    createOrders,
    getOrderById,
} = require('../Contollers/order')

OrderRouter.post('/createOrder', createOrders)
OrderRouter.get('/getOrderById/:_id',getOrderById)


module.exports = OrderRouter