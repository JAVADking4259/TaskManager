const mongoose = require('mongoose');
const statics = require('../../helpers/statics');

const taskModel = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: statics.STATUS.PENDING
        },
        userId: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);

const TaskManager = mongoose.model('TaskManager', taskModel);
module.exports = TaskManager;
