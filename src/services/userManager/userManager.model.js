const mongoose = require('mongoose');
const statics = require('../../helpers/statics');

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
        role: {
            type: String,
            default: statics.role.USER.name
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
