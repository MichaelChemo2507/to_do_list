const express = require('express');
const router = express.Router();
module.exports = router;



router.get('/',(req,res)=> {
    res.render("mainTasks",{pageTitle:"הצגת משימות"});
});
router.post('/Add',(req,res)=> {
let {Missions_Name,Owner_Id,Due_Date,Done_Date,Category_Id,Creator_Id}=req.body;

    console.log(Missions_Name)
    let q = "INSERT INTO tasks"
    q+="(Missions_Name,Owner_Id,Due_Date,Done_Date,Category_Id,Creator_Id) ";
    q+=`VALUES('${Missions_Name}','${Owner_Id}','${Due_Date}','${Done_Date}','${Category_Id}','${Creator_Id}')`;
    console.log(q);
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.redirect('/front/Tasks');
        }
    })
});
router.post('/Update/:id',(req,res)=> {
    let index = req.params.id;
    let {Missions_Name,Owner_Id,Due_Date,Done_Date,Category_Id,Creator_Id}=req.body;
    console.log(Missions_Name)
    let q = "UPDATE tasks "
    q+=`SET Missions_Name = '${Missions_Name}',`;
    q+=`Owner_Id = '${Owner_Id}',`;
    q+=`Due_Date = '${Due_Date}',`;
    q+=`Done_Date = '${Done_Date}',`;
    q+=`Category_Id = '${Category_Id}',`;
    q+=`Creator_Id = '${Creator_Id}' `;
    q+=`WHERE Mission_Id = '${index}'`;
    console.log(q);
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.redirect('/front/Tasks');
        }
    })
});
router.get('/List',(req, res)=>{
    let q = `SELECT * FROM tasks`;
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
    let q = `DELETE FROM tasks WHERE mission_Id = ${id}`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"ok"});
        }
    })
});

