// import
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
})