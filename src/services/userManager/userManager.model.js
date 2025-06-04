const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true
        },
        password: {
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

const User = mongoose.model('User', userModel);
module.exports = User;
