const express = require('express');
const router = express.Router();
module.exports = router;



router.get('/',(req,res)=> {
    res.render("mainBg",{pageTitle:"ניהול צבעים"});
});
router.post('/Add',(req,res)=> {
    let {bg_name,bg_color,bg_text_color}=req.body;
    let q = "INSERT INTO  background_tbl ";
    q+="(bg_name,bg_color,bg_text_color) ";
    q+=`VALUES('${bg_name}','${bg_color}','${bg_text_color}')`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.redirect('/front/bg');
        }
    })
});
router.post('/Update/:id',(req,res)=> {
    let index = req.params.id;
    let {bg_name,bg_color,bg_text_color}=req.body;
    let q = "UPDATE background_tbl ";
    q+=`SET bg_name = '${bg_name}',`;
    q+=`bg_color = '${bg_color}',`;
    q+=`bg_text_color = '${bg_text_color}' `;
    q+=`WHERE id = ${index}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.redirect('/front/bg');
        }
    })
});
router.get('/List',(req, res)=>{
    let q = `SELECT * FROM background_tbl`;
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
    let q = `DELETE FROM background_tbl WHERE id = ${id}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"ok"});
        }
    })
});

