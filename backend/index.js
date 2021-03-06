const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const expressSession = require('express-session');
require('dotenv').config();


app.use(cors());
app.use(express.json());

const URI = process.env.URI

mongoose.connect(URI,({useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true}));

let db = mongoose.connection;

db.once('open',()=>{
    console.log(`Hey Bro i have just got connected to db`);
});

db.on('error',(err)=>{
    console.log(`A trouble just encountered with db ${err}`);
});

app.use(expressSession({
    secret:'A keyboard cat',
    saveUninitialized:true,
    resave:true
}));

app.use('/users',require('./routes/users'));
app.use('/exercise',require('./routes/exercise'));

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Hey bro i am running on ${port}`);
})