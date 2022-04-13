const router = require("express").Router();

const categoryCTRL = require("../controllers/category.controller")

router.post("/create",categoryCTRL.add_category);

router.delete("/delete",categoryCTRL.delete_category);

router.get("/get",categoryCTRL.get);

module.exports = router