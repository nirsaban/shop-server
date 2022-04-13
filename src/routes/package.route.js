const router = require("express").Router();
const requireAuth = require("../middlewares/auth")
const packageCRTL = require("../controllers/package.controller");

router.post("/create",requireAuth,packageCRTL.create);
router.get("/get",packageCRTL.get);


module.exports = router;