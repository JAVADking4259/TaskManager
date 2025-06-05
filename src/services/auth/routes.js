const router = require('express').Router({ mergeParams: true });
const AuthController = require('./auth.controller');

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

module.exports = router;
