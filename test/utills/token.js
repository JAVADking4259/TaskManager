const JWT = require('jsonwebtoken');

const token = (payload) => JWT.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });

module.exports = { token };
