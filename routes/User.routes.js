const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller');


//Receives {username: <>, password: <>} in the body.
//Returns token
router.post('/signup', UserController.apiCreateUser);
router.post('/signin', UserController.apiSignInUser);

//Receives {username: <>, password: <>, newUsername: <>}
//Returns user
router.post('/updateusername', UserController.apiUpdateUsername);

//Receives {username: <>, password: <>, newPassword: <>}
//Returns user
router.post('/updatepassword', UserController.apiUpdatePassword);

//Receives {username: <>, password: <>}
router.delete('/deleteuser', UserController.apiDeleteUser);


module.exports = router;