const express= require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose = require('mongoose');

const {MongoClient} = require('mongodb');
const PORT = process.env.PORT;
dotenv.config({ path: './config.env' });
const User=require('./model/userSchema');
const url = process.env.DATABASE;
mongoose.connect(url);
//require('./db/connection');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./routes/auth'));

/*app.get('/', (req,res)=>{
    res.send('Hello World');
});*/
app.get('/',(req,res)=>{
    res.send('Hello Home');
});
app.get('/register', (req,res)=>{
    res.send('Hello signup');
});
app.get('/signin', (req,res)=>{
    res.send('Hello Signin');
});
app.get('/mentorship', (req,res)=>{
    res.send('Hello Mentorship');
});
app.get('/opportunity', (req,res)=>{
    res.send('Hello opportunity');
});
app.get('/resources', (req,res)=>{
    res.send('Hello resources');
});
app.get('/contact', (req,res)=>{
    res.send('Hello contact');
});
app.get('/events', (req,res)=>{
    res.send('Hello Event');
});

app.listen(4000,()=>{
    console.log('server is running at port ${PORT}');
})