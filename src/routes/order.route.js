const router = require("express").Router();

const orderCTRL = require("../controllers/order.controller")

router.post("/create",orderCTRL.create_order);

module.exports = router