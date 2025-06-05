const { sign, verify, decode } = require('jsonwebtoken');
const { promisify } = require('util');

const tokenGenerator = async (payload, secret, expiresIn) => await promisify(sign)(payload, secret, { expiresIn });
const verifyToken = async ({ token, secretKey }) => {
    try {
        if (token) {
            await promisify(verify)(token, secretKey);
            return true;
        }
    } catch (err) {
        Logger.error(err);
    }
    return false;
};
const extractTokenPayload = (token) => decode(token);
const extractToken = ({ headers }) => {
    const { authorization } = headers;
    if (authorization) {
        if (!authorization.startsWith('Bearer ')) {
            throw {
                message: 'توکن احراز هویت نامعتبر است'
            };
        }
        return authorization.split(' ')[1];
    }
    throw {
        message: 'توکن احراز هویت ارسال نشده است'
    };
};

module.exports = {
    tokenGenerator,
    verifyToken,
    extractTokenPayload,
    extractToken
};
