const router = require("express").Router();

const cmsCtrl = require("../controllers/cms.controller");

router.post("/", cmsCtrl.create);
router.put("/", cmsCtrl.update);
router.get("/:key", cmsCtrl.get);
router.delete("/", cmsCtrl.delete);
module.exports = router;
