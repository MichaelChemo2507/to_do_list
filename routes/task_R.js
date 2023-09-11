const express = require('express');
const router = express.Router();
module.exports = router;



router.get('/',(req,res)=> {
    res.render("tasks_data",{pageTitle:"הצגת משימות"});
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
            res.redirect('/front/addTasks');
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
