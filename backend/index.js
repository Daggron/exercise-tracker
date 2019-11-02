const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
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

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Hey bro i am running on ${port}`);
})