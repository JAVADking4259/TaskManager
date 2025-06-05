const router = require('express').Router({ mergeParams: true });
const TaskManagerController = require('./taskManager.controller');
const AuthenticationMiddleWare = require('../../middlewares/AuthenticationMiddleWare');
const AuthorizationMiddleWare = require('../../middlewares/AuthorizationMiddleWare');
const SchemaValidationMiddleware = require('../../middlewares/SchemaValidatorMiddleware');
const { createTaskSchema } = require('./taskManager.schema');

router.post(
    '/users/:userId/tasks',
    AuthenticationMiddleWare(),
    AuthorizationMiddleWare('CREATE_TASK'),
    SchemaValidationMiddleware(createTaskSchema),
    TaskManagerController.createTask
);
router.get(
    '/users/:userId/tasks',
    AuthenticationMiddleWare(),
    AuthorizationMiddleWare('READ_TASKS'),
    TaskManagerController.getAllTasks
);
router.get(
    '/users/:userId/tasks/:taskId',
    AuthenticationMiddleWare(),
    AuthorizationMiddleWare('READ_TASKS'),
    TaskManagerController.getTask
);
router.put(
    '/users/:userId/tasks/:taskId',
    AuthenticationMiddleWare(),
    AuthorizationMiddleWare('UPDATE_TASK'),
    TaskManagerController.updateTask
);
router.delete(
    '/users/:userId/tasks/:taskId',
    AuthenticationMiddleWare(),
    AuthorizationMiddleWare('DELETE_TASK'),
    TaskManagerController.deleteTask
);
router.put(
    '/users/:userId/tasks-start/:taskId',
    AuthenticationMiddleWare(),
    AuthorizationMiddleWare('START_TASK'),
    TaskManagerController.startTask
);
router.put(
    '/users/:userId/tasks-done/:taskId',
    AuthenticationMiddleWare(),
    AuthorizationMiddleWare('DONE_TASK'),
    TaskManagerController.doneTask
);

module.exports = router;
