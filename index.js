const express = require('express');
const port =2506;
const app  = express();
app.use(express.json());

let db_M = require('./database');
global.db_pool = db_M.pool;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
const {json} = require("express");

const car_rtr = require('./routes/cat_R');
app.use('/Categories',car_rtr);
const task_rtr = require('./routes/task_R');
app.use('/Tasks',task_rtr);
const front_rtr = require('./routes/FE_R');
app.use('/front',front_rtr);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));
app.set("view engine","ejs");



app.listen(port,()=>{
    console.log(`now listening on port ${port} http://localhost:2506/`);
})
