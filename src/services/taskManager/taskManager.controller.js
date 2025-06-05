const TaskManagerLogic = require('./taskManager.logic');

const createTask = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body,
            params: {
                userId: req.params.userId
            }
        };

        const { message, data } = await TaskManagerLogic.createTask(inputData);
        res.status(201).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

const getAllTasks = async (req, res, next) => {
    try {
        const inputData = {
            query: req.query,
            params: { userId: req.params.userId }
        };

        const { message, data } = await TaskManagerLogic.getTasks(inputData);
        res.status(200).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

const getTask = async (req, res, next) => {
    try {
        const inputData = {
            params: {
                taskId: req.params.taskId,
                userId: req.params.userId
            }
        };

        const { message, data } = await TaskManagerLogic.getTask(inputData);
        res.status(200).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body,
            params: {
                taskId: req.params.taskId,
                userId: req.params.userId
            }
        };

        const { message } = await TaskManagerLogic.updateTask(inputData);
        res.status(200).send({ message: message });
    } catch (error) {
        return next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const inputData = {
            params: {
                taskId: req.params.taskId,
                userId: req.params.userId
            }
        };

        const { message } = await TaskManagerLogic.deleteTask(inputData);
        res.status(200).send({ message: message });
    } catch (error) {
        return next(error);
    }
};

const startTask = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body,
            params: {
                taskId: req.params.taskId,
                userId: req.params.userId
            }
        };

        const { message } = await TaskManagerLogic.startTask(inputData);
        res.status(200).send({ message: message });
    } catch (error) {
        return next(error);
    }
};

const doneTask = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body,
            params: {
                taskId: req.params.taskId,
                userId: req.params.userId
            }
        };

        const { message } = await TaskManagerLogic.doneTask(inputData);
        res.status(200).send({ message: message });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    createTask,
    startTask,
    doneTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
};
