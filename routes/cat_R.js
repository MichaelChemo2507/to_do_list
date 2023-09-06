const express = require('express');
const router = express.Router();
module.exports = router;


router.post('/Add',(req,res)=> {
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
router.get('/List',(req, res)=>{
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
    let q = `DELETE FROM categories WHERE Category_Id = ${id}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json(rows);
        }
    })
});
router.patch('/Update',(req,res)=> {
    let id = Number(req.body.row_id);
    let Name = req.body.name;
    let q = `UPDATE categories SET Category_Name = '${Name}' WHERE Category_Id = ${id}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({fields:fields,rows:rows});
        }
    })
});
