const router = require("express").Router();

const contactCtrl = require("../controllers/contact.controller")

router.post("/create",contactCtrl.create);
router.get("/get_all", contactCtrl.create);

module.exports = router