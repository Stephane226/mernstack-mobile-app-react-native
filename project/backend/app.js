const express = require('express')
const app = express()
require('dotenv/config')
app.use(express.json())
const morgan = require('morgan')
app.use(morgan('tiny'))
const api = process.env.API_URL


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


const productSchema = mongoose.Schema({
    name: String,
    image: String,

    countInStock : {
    type: Number,
    required : true
    },

})

const Product = mongoose.model('products', productSchema)


app.listen(3000, ()=>{
    console.log('server listening on the 3000')
})


app.get('/', (req, res) =>{
    res.send('hello api')
})




app.get(`/products`, (req, res) =>{
   console.log(api)
    const porduct = {
        id: 1,
        name: 'masaaki stephane',
        image: 'https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/icons/IMA-Logo-Social-Sharing.ashx?rev=c0e5e2be67f84f4081d61abdb80622e0'
    }
    res.send(porduct)
})

app.get(`/all-products`, async (req, res) =>{

     const products = await Product.find()
     res.send(products)
 })

 

app.post(`/products`, (req, res) =>{
     const product = new Product({
        name :req.body.name,
        image : req.body.image,
        countInStock : req.body.countInStock
     })
     product.save().then((createdProduct) =>{
        res.status(201).json(createdProduct)
     }).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false,
        })
     })
 })