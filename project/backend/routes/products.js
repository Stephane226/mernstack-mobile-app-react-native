const express = require('express')
const router = express.Router()
const Product = require('./models/product')



router.get('/', (req, res) =>{
    res.send('hello api')
})




router.get(`/`, (req, res) =>{
   console.log(api)
    const porduct = {
        id: 1,
        name: 'masaaki stephane',
        image: 'https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/icons/IMA-Logo-Social-Sharing.ashx?rev=c0e5e2be67f84f4081d61abdb80622e0'
    }
    res.send(porduct)
})

router.get(`/`, async (req, res) =>{

     const products = await Product.find()
     res.send(products)
 })

 

router.post(`/`, (req, res) =>{
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

 module.exports = router