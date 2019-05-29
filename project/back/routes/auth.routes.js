
const express = require('express');
const AuthController = require('../controllers/auth.controller');
const checkToken = require('../middlewares/check-token.middleware');
const router = express.Router();


router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/checkToken', checkToken, AuthController.checkToken);



module.exports = router;