const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const uploadImages = require("../utils/imageUpload")
const aboutCTRL = require("../controllers/about.controller")
const requireAuth = require("../middlewares/auth")
const multer = require("multer")


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
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


router.post("/create",requireAuth ,uploadImages, upload.array("images", 6), aboutCTRL.create_about)
router.get("/get",aboutCTRL.get)

module.exports = router