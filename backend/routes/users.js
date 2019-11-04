let router = require('express').Router();
let User = require('../models/user.models');

router.get('/',(req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err => res.status(400).json('Error'+err));
});

router.post('/add',(req,res)=>{
    let user = new User();
    user.username = req.body.username;
    User.create(user)
    .then(()=>res.json('User Added Successfully'))
    .catch(err=>res.status(400).json('Error'+err));
})


module.exports = router;