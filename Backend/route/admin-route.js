const adminMiddleware  = require("../route/admin-middleware");
const authMiddleware = require("../auth-middleware")
const express = require('express');
const data = require('../controllers/admin-control');
const router = express.Router();


router.route('/users').get(authMiddleware,adminMiddleware,data.getAllUsers);
router.route("/users/delete/:id").delete(data.dalateUserById)  
router.route('/contact').get(authMiddleware,adminMiddleware,data.getAllContact);
router.route('/contact/delete/:id').delete(data.deletecontactById);

module.exports = router;


// adminMiddleware,authMiddleware,
// ccadminMiddleware,
// authMiddleware,adminMiddleware, 