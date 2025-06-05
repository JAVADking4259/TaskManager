const UserModel = require('../userManager/userManager.model');
const AuthModel = require('./auth.model');
const Tools = require('../../helpers/tools');

const login = async (inputData) => {
    const { body } = inputData;

    const user = await UserModel.findOne({
        userName: body.userName,
        password: body.password
    });

    if (!user) {
        throw {
            message: 'نام کاربری یا رمز عبور نادرست است',
            status: 404
        };
    }

    const jwtPayload = {
        id: user._id,
        role: user.role
    };
    const secretKey = process.env.SECRET_KEY;
    const expiresIn = process.env.EXPIRE_IN;
    const token = await Tools.tokenGenerator(jwtPayload, secretKey, expiresIn);

    const authToken = new AuthModel({
        accessToken: token
    });

    await authToken.save();

    return {
        message: 'خوش آمدید',
        data: {
            accessToken: token,
            user: user
        }
    };
};

const signup = async (inputData) => {
    const { body } = inputData;
    const existingUser = await UserModel.findOne({
        userName: body.userName
    });

    if (existingUser) {
        throw {
            message: 'کاربری با این نام کاربری موجود است',
            status: 500
        };
    }

    const user = new UserModel({
        userName: body.userName,
        password: body.password
    });

    await user.save();

    return {
        message: 'ثبت نام موفقیت آمیز بود',
        data: user
    };
};

module.exports = {
    login,
    signup
};
