const express = require('express');
const port =2506;
const app  = express();
app.use(express.json());
let db_M = require('./database');
global.db_pool = db_M.pool;


const path = require('path');
const {json} = require("express");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine","ejs");
app.get('/',(req,res)=> {
    res.render("mainPage",{pageTitle:"הוספת קטגוריה"});
});
app.get('/Add',(req,res)=> {
let Name = req.body.name;
    let q = `INSERT INTO categories(Category_Name) VALUES('${Name}')`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
});
app.post('/LIST',(req, res)=>{
    let q = `SELECT * FROM categories`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json(rows);
        }
    })
})
app.delete(`/DELETE/:id`,(req,res)=>{
    let id = req.params.id;
    let q = `DELETE * FROM categories WHERE ID = ${id}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json(rows);
        }
    })
});
app.listen(port,()=>{
    console.log(`now listening on port ${port}`);
})
