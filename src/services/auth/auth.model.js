const mongoose = require('mongoose');

const authModel = new mongoose.Schema(
    {
        accessToken: {
            type: String,
            required: true,
            unique: true
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

const Auth = mongoose.model('Auth', authModel);
module.exports = Auth;
