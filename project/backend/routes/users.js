const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')


router.get(`/`, async (req, res) =>{
    const userList = await User.find();

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
})


//new user regis
router.post('/' , async (req,res) =>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    })

    user = await user.save();

    if(!user){
        return res.status(404).send('the user cannot be created...')
    }

    res.send(user);

})



//get list of users

router.get(`/`, async (req, res) =>{
    const users = await User.find().select("-passwordHash");

    if(!users) {
        res.status(500).json({success: false, message : "no user found"})
    } 
    res.send(users);
})


//find a user by id

router.get('/:id', async  (req, res) => {
    const user = await User.findById(req.params.id).select("name phone email");

    if(!user){
        return res.status(404).send('the category cannot be created...')
    }

    res.send(user);
    
})


//user login checks

router.post('/login', async  (req, res) => {
    const user = await User.findOne({email : req.body.email})

    if(!user){
        return res.status(404).send('user not exist...')
    }

    if(user && bcrypt.compareSync( req.body.password , user.passwordHash)){
        res.status(200).send('user authentificated...')

    }
    
})



//export the module router
module.exports =router;