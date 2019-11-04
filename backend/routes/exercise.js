const router = require('express').Router();
const Exercise = require('../models/exercise.models');

router.get('/',(req,res)=>{
    Exercise.find({})
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error'+err));
});


router.route('/add').post((req,res)=>{
    let exercise = new Exercise();
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    Exercise.create(exercise)
    .then(()=>res.json('Exercise added successfully'))
    .catch(err=>res.status(400).json('Error'+err));
})

module.exports = router;