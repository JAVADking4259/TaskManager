const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../app');
const { taskMock, taskBodyMock } = require('../../__mocks__/taskManager/taskManager.mock');
const { accessToken } = require('../../__mocks__');
const TaskModel = require('../../../src/services/taskManager/taskManager.model');

describe('TaskManager', () => {
    let agent;
    beforeAll(async () => {
        const url = global.__MONGOURL__;
        await mongoose.connect(url, { dbName: 'TaskManager' });
        await taskMock.save();
        agent = request.agent(app).set('authorization', `Bearer ${accessToken}`);
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    describe('create task', () => {
        it('should insert a task', async () => {
            const response = await agent.post(`/users/68413ef767f15695ae093b8b/tasks`).send(taskBodyMock);
            expect(response.status).toBe(201);
        });
    });
});
