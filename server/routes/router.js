const Router = require("express");
const router = new Router();
const controller = require("../controller/controller");

router.get("/", controller.get);

module.exports = router;
