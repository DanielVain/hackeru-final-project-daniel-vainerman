const express = require('express');
const router = express.Router();
const loginRouter = require('./users/login');
const registerRouter = require('./users/register');
const findUserRouter = require('./users/find');
const changePasswordRouter = require('./users/updatePassword');
const auth = require('../middleware/auth');

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/find', findUserRouter);
router.use('/change-password', auth, changePasswordRouter);

module.exports = router;
