const router = require('express').Router({ mergeParams: true });
const AuthController = require('./auth.controller');
const SchemaValidatorMiddleware = require('../../middlewares/SchemaValidatorMiddleware');
const { loginAndSignupSchema } = require('./auth.schema');

router.post('/login', SchemaValidatorMiddleware(loginAndSignupSchema), AuthController.login);
router.post('/signup', SchemaValidatorMiddleware(loginAndSignupSchema), AuthController.signup);

module.exports = router;
