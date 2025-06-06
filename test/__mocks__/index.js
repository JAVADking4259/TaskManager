const { token } = require('../utills/token');
const statics = require('../../src/helpers/statics');

const payload = {
    id: '68413ef767f15695ae093b8b',
    role: statics.role.USER.name
};

const accessToken = token(payload);

module.exports = { accessToken };
