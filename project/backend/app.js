const express = require('express')
const app = express()
require('dotenv/config')
app.use(express.json())
const morgan = require('morgan')
app.use(morgan('tiny'))
const api = process.env.API_URL
const authJwt = require('./helpers/jwt')
//routes
const productsRouter = require('./routes/products')
const categoriesRouter = require('./routes/categories')
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");


const Product = require('./models/product')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://masaaki:1234bb@cluster0.ntqy8yu.mongodb.net/db?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    dbName : 'eshop-database',
})
.then( ()=>{
    console.log('connection to db done...')
}).catch((err)=>{
    console.log(err)
})




app.listen(3000, ()=>{
    console.log('server listening on the 3000')
})


//middlewares
app.use(`/products`, productsRouter)
app.use('/categories' , categoriesRouter)
app.use(`/users`, usersRoutes);
app.use(`/orders`, ordersRoutes);
app.use(authJwt())