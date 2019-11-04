const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        required:true,
        minlength:3
    }
},{
    timestamps:true
});


let User = mongoose.model('User',UserSchema);


module.exports = User;