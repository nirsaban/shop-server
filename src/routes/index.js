const categoryRoute = require("./category.route.js");
const productRoute = require("./product.route.js");
const packageRoute = require("./package.route.js");
const userRoute = require("./user.route"); 
const orderRoute = require("./order.route"); 
const contactRoute = require("./contact.route"); 
const aboutRoute = require("./about.route"); 
const cmsRoute = require("./cms.route"); 
const router = require("express").Router();
const requireAuth = require("../middlewares/auth")
const multer = require('multer')

router.use("/category", requireAuth, categoryRoute);
router.use("/product", productRoute);
router.use("/package", packageRoute);
router.use("/order",requireAuth, orderRoute);
router.use("/user", userRoute);
router.use("/contact", contactRoute);
router.use("/about", aboutRoute);
router.use("/cms", cmsRoute);
module.exports = router