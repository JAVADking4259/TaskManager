const router = require('express').Router({ mergeParams: true });
const TaskManagerController = require('./taskManager.controller');
const AuthenticationMiddleWare = require('../../middlewares/AuthenticationMiddleWare');
const SchemaValidationMiddleware = require('../../middlewares/SchemaValidatorMiddleware');
const { createTaskSchema } = require('./taskManager.schema');

router.post(
    '/users/:userId/tasks',
    // AuthenticationMiddleWare(),
    SchemaValidationMiddleware(createTaskSchema),
    TaskManagerController.createTask
);
router.get('/users/:userId/tasks', AuthenticationMiddleWare(), TaskManagerController.getAllTasks);
router.get('/users/:userId/tasks/:taskId', AuthenticationMiddleWare(), TaskManagerController.getTask);
router.put('/users/:userId/tasks/:taskId', AuthenticationMiddleWare(), TaskManagerController.updateTask);
router.delete('/users/:userId/tasks/:taskId', AuthenticationMiddleWare(), TaskManagerController.deleteTask);
router.put('/users/:userId/tasks-start/:taskId', AuthenticationMiddleWare(), TaskManagerController.startTask);
router.put('/users/:userId/tasks-done/:taskId', AuthenticationMiddleWare(), TaskManagerController.doneTask);

module.exports = router;
