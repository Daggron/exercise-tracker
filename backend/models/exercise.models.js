const mongoose = require('mongoose');

let exerciseSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
},{
    timestamps:true
});


let Exercise = mongoose.Model('Exercise',exerciseSchema);

module.exports = Exercise;