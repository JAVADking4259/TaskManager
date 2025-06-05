const TaskManagerModel = require('./taskManager.model');
const { ObjectId } = require('mongodb');
const statics = require('../../helpers/statics');

const createTask = async (inputData) => {
    const { body, params } = inputData;
    const task = new TaskManagerModel({
        title: body.title,
        description: body.description,
        userId: params.userId
    });

    await task.save();

    return {
        message: 'وظیفه با موفقیا لیجاد شد',
        data: task
    };
};

const getTasks = async (inputData) => {
    const { query, params } = inputData;

    const filter = {};

    filter.userId = new ObjectId(params.userId);
    if (query.status || query.title) {
        filter.status = query.status;
        filter.title = query.title;
    }

    const tasks = await TaskManagerModel.find(filter);

    return {
        message: 'لیست وظایف با موفقیت دریافت شد',
        data: tasks
    };
};

const getTask = async (inputData) => {
    const { params } = inputData;

    const task = await TaskManagerModel.findOne({ _id: new ObjectId(params.taskId) });

    if (!task) {
        throw {
            message: 'وظیفه ای یافت نشد',
            status: 404
        };
    }

    return {
        message: 'وظیفه با موفقیت یافت شد',
        data: task
    };
};

const updateTask = async (inputData) => {
    const { body, params } = inputData;

    const task = await TaskManagerModel.findOne({ _id: new ObjectId(params.taskId) });

    if (!task) {
        throw {
            message: 'وظیفه ای یافت نشد',
            status: 404
        };
    }

    await TaskManagerModel.updateOne(
        {
            _id: new ObjectId(params.taskId)
        },
        { $set: body }
    );

    return {
        message: 'وظیفه مورد نظر با موفقیت ویرایش شد'
    };
};

const deleteTask = async (inputData) => {
    const { params } = inputData;

    const task = await TaskManagerModel.findOne({ _id: new ObjectId(params.taskId) });

    if (!task) {
        throw {
            message: 'وظیفه ای یافت نشد',
            status: 404
        };
    }

    await TaskManagerModel.deleteOne({
        _id: new ObjectId(params.taskId)
    });

    return {
        message: 'وظیفه مورد نظر با موفقیت حذف گردید'
    };
};

const startTask = async (inputData) => {
    const { params } = inputData;

    const task = await TaskManagerModel.findOne({ _id: new ObjectId(params.taskId) });

    if (!task) {
        throw {
            message: 'وظیفه ای یافت نشد',
            status: 404
        };
    }

    await TaskManagerModel.updateOne(
        { _id: new ObjectId(params.taskId) },
        { $set: { status: statics.STATUS.IN_PROGRESS } }
    );

    return {
        message: 'وظیفه با موفقیت شروع شد'
    };
};

const doneTask = async (inputData) => {
    const { params } = inputData;

    const task = await TaskManagerModel.findOne({ _id: new ObjectId(params.taskId) });

    if (!task) {
        throw {
            message: 'وظیفه ای یافت نشد',
            status: 404
        };
    }

    await TaskManagerModel.updateOne({ _id: new ObjectId(params.taskId) }, { $set: { status: statics.STATUS.DONE } });

    return {
        message: 'وظیفه با موفقیت تمام شد'
    };
};

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask, startTask, doneTask };
