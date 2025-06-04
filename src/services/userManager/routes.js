const router = require('express').Router({ mergeParams: true });
const userController = require('./userManager.controller');
const SchemaValidatorMiddleware = require('../../middlewares/SchemaValidatorMiddleware');
const { createUserSchema } = require('./userManager.schema');

router.post('/users', SchemaValidatorMiddleware(createUserSchema), userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
