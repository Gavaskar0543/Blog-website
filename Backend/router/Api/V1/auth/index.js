//auth index
const express = require('express');
const router = express.Router();
const authController = require('../../../../Controllers/Api/V1/Authentication');
router.post('/createAccount',authController.createAccount);
module.exports = router;