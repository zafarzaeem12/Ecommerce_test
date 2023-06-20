const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors())
dotenv.config()

// Routes start here
const orderRouter = require('./Routes/order')
const productRouter = require('./Routes/product')
const usersRouter = require('./Routes/users')

app.use('/demo/order/',  orderRouter)
app.use('/demo/product/', productRouter)
app.use('/demo/user/', usersRouter)
// Routes end here

// db start here
mongoose.connect(process.env.Db).then((res)=>{
    console.log(`database is connect successfully`)
})
.catch(err=>{
    console.log(`database is not connect successfully ${err} `)
})
// db end here


app.listen(process.env.Port, ()=>{
    console.log(`server is running is on port ${process.env.Port}`)
})