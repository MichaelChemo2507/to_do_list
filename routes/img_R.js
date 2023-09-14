const express = require('express');
const router = express.Router();
const multer = require('multer');
module.exports = router;
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'images/'); // Uploads will be stored in the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname); // Generate a unique filename
    },
});

const upload = multer({ storage: storage });


router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    let name = '/' + req.file.destination+ req.file.filename;
    let q = `INSERT INTO files_tbl(file_name) VALUES('${name}')`;
    db_pool.query(q,function (err,rows,fields){
        if (err){
            res.status(500).json({message:err});
        }
    })
    res.redirect("/front/bg");
});
