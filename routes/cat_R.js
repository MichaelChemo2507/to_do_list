const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/',(req,res)=> {
    res.render("mainPage",{pageTitle:"הוספת קטגוריה"});
});
router.get('/Add',(req,res)=> {
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
router.post('/List',(req, res)=>{
    let q = `SELECT * FROM categories`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json(rows);
        }
    })
})
router.delete(`/Delete/:id`,(req,res)=>{
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
router.patch('/Update/:row_id',(req,res)=> {
    let id = Number(req.params.row_id);
    let Name = req.body.name;
    let q = `UPDATE categories SET name = '${Name}' WHERE ID = ${id}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
});
