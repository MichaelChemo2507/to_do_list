const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/',(req,res)=> {
    res.render("mainPage",{pageTitle:"הוספת קטגוריה"});
});

router.get('/addTasks',(req,res)=> {
    res.render("tasks_data",{pageTitle:"הוספת מטלה"});
});