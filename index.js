const express = require('express');
const port =2506;
const app  = express();
app.use(express.json());
let db_M = require('./database');
global.db_pool = db_M.pool;

let Name = "Ploni";

const path = require('path');
const {json} = require("express");
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req,res)=> {
    let q = `INSERT INTO \`categories\` (\`Category_Name\`) VALUES('${Name}')`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
});
app.post('/LIST',(req, res)=>{
    let q = `SELECT * FROM \`categories\``;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.send(json(rows));
        }
    })
})
app.post('CREATE',(req,res)=>{
let CategoriesLine ={

};
let MissionsLin={

    };
let OwnersLine = {

};

});
app.post('CREATE',(req,res)=>{

});
app.post('UPDATE',(req,res)=>{

});
app.post('DELETE',(req,res)=>{

});
app.listen(port,()=>{
    console.log(`now listening on port ${port}`);
})
