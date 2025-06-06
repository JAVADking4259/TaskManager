const TaskModel = require('../../../src/services/taskManager/taskManager.model');
const statics = require('../../../src/helpers/statics');

const taskBodyMock = {
    title: 'Task Manager',
    description: 'managing tasks for task',
    status: statics.STATUS.PENDING,
    userId: '68413ef767f15695ae093b8b'
};

const taskMock = new TaskModel(taskBodyMock);

module.exports = { taskBodyMock, taskMock };
