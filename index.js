const express = require('express');
const port =2506;
const app  = express();
app.use(express.json());
let db_M = require('./database');
global.db_pool = db_M.pool;


const path = require('path');
const {json} = require("express");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));

app.set("view engine","ejs");

const car_rtr = require('./routes/cat_R');
app.use('/Categories',car_rtr);

app.listen(port,()=>{
    console.log(`now listening on port ${port}`);
})
