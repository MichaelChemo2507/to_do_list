const express = require('express');
const router = express.Router();
module.exports = router;



router.get('/',(req,res)=> {
    res.render("mainOwner",{pageTitle:"הצגת בעלים"});
});
router.post('/Add',(req,res)=> {
    let {Owner_Name,UserName,Password}=req.body;
    let q = "INSERT INTO  owner_details ";
    q+="(Owner_Name,UserName,Password) ";
    q+=`VALUES('${Owner_Name}','${UserName}','${Password}')`;
    console.log(q);
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
           res.redirect('/front/owner');
        }
    })
});
router.post('/Update/:id',(req,res)=> {
    let index = req.params.id;
    let {Owner_Name,UserName,Password}=req.body;
    let q = "UPDATE owner_details ";
    q+=`SET Owner_Name = '${Owner_Name}',`;
    q+=`UserName = '${UserName}',`;
    q+=`Password = '${Password}' `;
    q+=`WHERE Owner_Id = ${index}`;
    console.log(q);
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.redirect('/front/owner');
        }
    })
});
router.get('/List',(req, res)=>{
    let q = `SELECT * FROM owner_details`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json(rows);
        }
    })
});
router.delete(`/Delete/:id`,(req,res)=>{
    let id = req.params.id;
    console.log(id)
    let q = `DELETE FROM owner_details WHERE Owner_Id = ${id}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"ok"});
        }
    })
});

