const UserModel = require('./userManager.model');
const { ObjectId } = require('mongodb');

const createUser = async (inputData) => {
    const { body } = inputData;

    const existingUser = await UserModel.findOne({ userName: body.userName });

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

    const result = await user.save();

    return {
        message: 'کاربر با موفقیت ثبت شد',
        data: result
    };
};

const getAllUsers = async (inputData) => {
    const { query } = inputData;

    const users = await UserModel.find();

    return {
        message: 'لیست کاربران با موفقیت دریافت شد',
        data: users
    };
};

const getUser = async (inputData) => {
    const { params } = inputData;

    const user = await UserModel.findOne({ _id: new ObjectId(params.userId) });

    if (!user) {
        throw {
            message: 'کاربری با این شناسه یافت نشد',
            status: 404
        };
    }

    return {
        message: 'کاربر یا موفقیت یافت شد',
        data: user
    };
};

const updateUser = async (inputData) => {
    const { body, params } = inputData;

    const user = await UserModel.findOne({ _id: new ObjectId(params.userId) });

    if (!user) {
        throw {
            message: 'کاربری با این شناسه یافت نشد',
            status: 404
        };
    }

    const updatedUser = await UserModel.updateOne({ _id: new ObjectId(params.userId) }, { $set: body });

    return {
        message: 'کاربر با موفقیت آپدیت شد'
    };
};

const deleteUser = async (inputData) => {
    const { params } = inputData;

    const user = await UserModel.findOne({ _id: new ObjectId(params.userId) });

    if (!user) {
        throw {
            message: 'کاربری با این شناسه یافت نشد',
            status: 404
        };
    }

    await UserModel.deleteOne({ _id: new ObjectId(params.userId) });

    return {
        message: 'کاربر با موفقیت حذف شد'
    };
};

module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
