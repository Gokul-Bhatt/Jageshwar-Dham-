const express = require("express");
const router = express.Router();
const controller = require("../controllers/controll");
const authMiddleware = require("../auth-middleware");
const adminMiddleware = require("../route/admin-middleware")

router.route("/").get(controller.home);
router.route("/register").post(controller.register)
router.route("/contact").post(controller.contact)
router.route("/user").get(authMiddleware,controller.user);
module.exports = router;