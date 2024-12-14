const express = require('express');
const router = express.Router();
const userHandler = require('../handlers/userHandler');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth'); // Import the auth middleware
const {verifyToken} = require('../middleware/verifyToken'); // Import the auth middleware

router.post('/signup', userHandler.signup);
router.post('/login', userHandler.login);
router.post('/verify-email', userHandler.verifyEmail);
router.post('/logout', userHandler.logout);
router.post('/forgot-password', userHandler.forgotPassword);
router.post('/reset-password/:token', userHandler.resetPassword);
router.get('/check-auth', verifyToken, userHandler.checkAuth);
router.get('/get-user', verifyToken, userHandler.getUser);
router.post('/is-admin', userHandler.isAdmin);

//router.get('/', userHandler.getUsers);
//router.get('/:userId', userHandler.getUserById);
//router.post('/', userHandler.createUser);
//router.put('/:userId', userHandler.updateUser);
//router.delete('/:userId', userHandler.deleteUser);
//router.post('/login', userHandler.login);
//router.post('/me', auth, userHandler.me);


module.exports = router;