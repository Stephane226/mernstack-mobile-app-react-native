const {Order} = require('../models/order');
const {OrderItem} = require('../models/order-item');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const orderList = await Order.find().populate('user', 'name email').sort({'dateOrdered' : -1});//newest to oldest

    if(!orderList) {
        res.status(500).json({success: false})
    } 
    res.send(orderList);
})

//get only one specific order by id
router.get(`/:id`, async (req, res) =>{
    const orderProduct = await Order.findById(req.params.id).populate('user')

    if(!orderProduct) {
        res.status(500).json({success: false})
    } 
    res.send(orderProduct);
})

//update a specific order

router.put(`/:id`, async (req, res) =>{
    const orderProduct = await Order.findByIdAndUpdate(
        req.params.id,
        {
          status : req.body.status
        },
        { new: true}
    )

    if(!orderProduct) {
        res.status(500).json({success: false})
    } 
    res.send(orderProduct);
})

router.post('/' , async (req,res) =>{
    const orderItemsIds = Promise.all(req.body.orderItems.map(async orderItem  =>{

       const  newOrderItem = new OrderItem({
            quantity : orderItem.quantity,
            product : orderItem.product
        })

         newOrderItemSave = await newOrderItem.save();
       return  newOrderItem.id;
    }))

    const orderItemIdsResolved = await orderItemsIds;
    console.log(orderItemIdsResolved)



    let order = new Order({

     
        orderItems: orderItemIdsResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: 22,
        user: req.body.user,
    })

      order = await order.save();

    if(!order){
        return res.status(404).send('the category cannot be created...')
    }

    res.send(order);

})



module.exports =router;