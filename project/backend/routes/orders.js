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


//get only one specific order by id and delete
router.delete(`/:id`, async (req, res) =>{
 
    Order.findByIdAndDelete(req.params.id).then(async order =>{
       if(order){
        await order.orderItems.map(async orderItem =>{
            await OrderItem.findByIdAndRemove(orderItem)
        })
        return res.status(200).json({success : true, message : 'all item deleted...'})
       }else{
        return res.status(400).json({success : false, message : 'all item nott  deleted...'})

       }
   })


    /*
    
        
  const orderTodelete = () =>{ 
    const orderToDelet =  Order.findById(req.params.id)
   // console.log(JSON.stringify(orderToDelet.country) )
   return orderToDelet
    }



   orderTodelete()
   .then(function(orderTodelete) {
    return orderTodelete.orderItems
   }).then( function(result){
        //  res.send(result)
          result.map(item =>{
            //console.log(item.toString())
          OrderItem.findByIdAndRemove(item.toString())
           //console.log(JSON.stringify(item))
        }).then(res.send('deleted'))


   })
 
    
    
    */
    //orderItems.map(item =>{
    //    OrderItem.findByIdAndDelete(item)
    //})

   // if(!deleteOrderProduct) {
       // res.status(500).json({success: false})
   // } 
   // res.send('PRODUCT DELETED...');
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