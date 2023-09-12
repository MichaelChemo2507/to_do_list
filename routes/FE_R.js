const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/',(req,res)=> {
    res.render("mainPage",{pageTitle:"הוספת קטגוריה"});
});

router.get('/Tasks',(req,res)=> {
    res.render("mainTasks",{pageTitle:"הוספת מטלה"});
});
router.get('/owner',(req,res)=> {
    res.render("mainOwner",{pageTitle:"הוספת בעלים"});
});
router.get('/bg',(req,res)=> {
    res.render("mainBg",{pageTitle:"ניהול צבעים"});
});