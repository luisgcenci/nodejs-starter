const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller');

router.post('/signup', UserController.apiCreateUser);
router.post('/signin', UserController.apiSignInUser);
router.post('/updateusername', UserController.apiUpdateUsername);
router.post('/updatepassword', UserController.apiUpdatePassword);
router.delete('/deleteuser', UserController.apiDeleteUser);

module.exports = router;