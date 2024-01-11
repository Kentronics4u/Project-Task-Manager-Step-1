const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.route('/signIn').post(authController.signIn);
router.route("/register").post(authController.register);



module.exports = router;
