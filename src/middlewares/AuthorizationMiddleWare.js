const jwt = require('jsonwebtoken');
const UserModel = require('../services/userManager/userManager.model');
const statics = require('../helpers/statics');
const Tools = require('../helpers/tools');
const { ObjectId } = require('mongodb');

const AuthorizationMiddleWare = (permission) => {
    return async (req, res, next) => {
        try {
            const token = await Tools.extractToken({ headers: req.headers });
            if (!token) {
                throw {
                    message: 'توکن ارسالی نامعتبر است'
                };
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY);

            const user = await UserModel.findOne({
                _id: new ObjectId(decoded.id)
            });

            if (!user || !user.role) {
                throw {
                    message: 'کاربر یافت نشد'
                };
            }

            const roleDef = statics.role[user.role];
            const hasPermission = roleDef.permissions.includes(permission);
            if (!hasPermission) {
                throw {
                    message: 'اجازه دسترسی وجود ندارد'
                };
            }

            req.user = user;
            next();
        } catch (error) {
            next(error);
        }
    };
};

module.exports = AuthorizationMiddleWare;
