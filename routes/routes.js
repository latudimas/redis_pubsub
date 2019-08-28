const router = require("express").Router();
const controller = require("../controllers/controller");

router.post("/publish", controller.publishMessage);

module.exports = router;
