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
});

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error'+err));
});

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Exercise deleted successfully"))
    .catch(err=>res.status(400).json('Error'+err));
});

router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(()=>res.json('Exercise updated successfully'))
        .catch(err=>res.status(400).json('Error Updating exercise'+err));
    })
    .catch(err=>res.status(400).res.json('Error'+err));
});

module.exports = router;