const {Order} = require('../models/order');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const orderList = await Order.find();

    if(!orderList) {
        res.status(500).json({success: false})
    } 
    res.send(orderList);
})




router.post('/' , async (req,res) =>{
    let order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: totalPrice,
        user: req.body.user,
    })

    order = await order.save();

    if(!order){
        return res.status(404).send('the category cannot be created...')
    }

    res.send(order);

})



module.exports =router;