const { Category } = require('../models/category');
const {Product} = require('../models/product');
const express = require('express');
const router = express.Router();
const multer  = require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/uploads')
    },
    filename: function (req, file, cb) {
      const fileName = file.originalname.replace(' ', '-')
      cb(null, fileName  +'-' + Date.now())
    }
  })
  
  const uploadOptions = multer({ storage: storage })





//get all products
router.get(`/`, async (req, res) =>{
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})

//get a specific product by id

router.get(`/:id`, async (req, res) =>{
    const product = await Product.findById(req.params.id).populate('category'); 


    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})


//add a product
router.post(`/`, uploadOptions.single('image'), async (req, res) =>{

    //first check if there is a valid category
    const category = Category.findById(req.body.category);
    if(!category){
        res.status(400).send('invalid category')
    }

    const fileName = req.file.filename
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    const product = new Product({
        name: req.body.name,
        image: `${basePath}${fileName}`,
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