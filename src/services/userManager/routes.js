const router = require('express').Router({ mergeParams: true });
const userController = require('./userManager.controller');
const SchemaValidatorMiddleware = require('../../middlewares/SchemaValidatorMiddleware');
const { createUserSchema } = require('./userManager.schema');
const AuthenticationMiddleware = require('../../middlewares/AuthenticationMiddleware');

router.post(
    '/users',
    AuthenticationMiddleware(),
    SchemaValidatorMiddleware(createUserSchema),
    userController.createUser
);
router.get('/users', AuthenticationMiddleware(), userController.getAllUsers);
router.get('/users/:userId', AuthenticationMiddleware(), userController.getUser);
router.put('/users/:userId', AuthenticationMiddleware(), userController.updateUser);
router.delete('/users/:userId', AuthenticationMiddleware(), userController.deleteUser);

module.exports = router;
