const { Category } = require('../models/category');
const {Product} = require('../models/product');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})

router.post(`/:id`,async (req, res) =>{

    //first check if there is a valid category
    const category = Category.findById(req.body.category);
    if(!category){
        res.status(400).send('invalid category')
    }

    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        richDescription: req.body.richDescription,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
        dateCreated: req.body.dateCreated,

    })

   const productSave  = await product.save()

    if(!productSave){
       return res.status(500).send('product not created')
    }else{
        res.status(200).send(productSave)
    }
})

module.exports =router;