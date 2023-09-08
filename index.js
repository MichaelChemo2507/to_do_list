const express = require('express');
const port =2506;
const app  = express();
app.use(express.json());
let db_M = require('./database');
global.db_pool = db_M.pool;


const path = require('path');
const {json} = require("express");

const car_rtr = require('./routes/cat_R');
const task_rtr = require('./routes/task_R');
app.use('/Categories',car_rtr);
app.use('/Tasks',task_rtr);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));
app.set("view engine","ejs");

app.get('/',(req,res)=> {
    res.render("mainPage",{pageTitle:"הוספת קטגוריה"});
});

app.listen(port,()=>{
    console.log(`now listening on port ${port} http://localhost:2506/`);
})
