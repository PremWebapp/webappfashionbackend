import express from 'express';
import multer from 'multer';

const router = express.Router();

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, 'uploadedFile');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });

let upload = multer({
    storage
})

router.post('/upload', upload.single('myFile'), (req, res) => {
    try {
        if(!req.file) return res.status(404).json({message:'we get no file for upload'});
        res.send(req.file);

        console.log(req.file)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'server error'});
    }
})

export default router