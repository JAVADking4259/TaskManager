const router = require('express').Router({ mergeParams: true });
const userController = require('./userManager.controller');
const SchemaValidatorMiddleware = require('../../middlewares/SchemaValidatorMiddleware');
const { createUserSchema } = require('./userManager.schema');
const AuthenticationMiddleware = require('../../middlewares/AuthenticationMiddleware');
const AuthorizationMiddleWare = require('../../middlewares/AuthorizationMiddleWare');

router.post(
    '/users',
    AuthenticationMiddleware(),
    AuthorizationMiddleWare('CREATE_USER'),
    SchemaValidatorMiddleware(createUserSchema),
    userController.createUser
);
router.get('/users', AuthenticationMiddleware(), AuthorizationMiddleWare('READ_USERS'), userController.getAllUsers);
router.get(
    '/users/:userId',
    AuthenticationMiddleware(),
    AuthorizationMiddleWare('READ_USERS'),
    userController.getUser
);
router.put(
    '/users/:userId',
    AuthenticationMiddleware(),
    AuthorizationMiddleWare('UPDATE_USERS'),
    userController.updateUser
);
router.delete(
    '/users/:userId',
    AuthenticationMiddleware(),
    AuthorizationMiddleWare('DELETE_USERS'),
    userController.deleteUser
);

module.exports = router;
