const router = require("express").Router();
const requireAuth = require("../middlewares/auth")
const packageCRTL = require("../controllers/package.controller");
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const uploadImages = require("../utils/imageUpload")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
        cb(null, process.env.dir);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-FileName-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".mp4") {
            return cb(new Error('Only mp4 format allowed!'));   
        }
        cb(null, true);
}
});

router.post("/create",requireAuth,uploadImages,upload.array("videos", 2),packageCRTL.create);
router.get("/get",packageCRTL.get);
router.delete("/delete",packageCRTL.delete);


module.exports = router;