const userManagerLogic = require('./userManager.logic');

const createUser = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body
        };

        const { message, data } = await userManagerLogic.createUser(inputData);
        res.status(201).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const inputData = {
            query: req.query
        };

        const { message, data } = await userManagerLogic.getAllUsers(inputData);
        res.status(200).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        const inputData = {
            params: {
                userId: req.params.userId
            }
        };

        const { message, data } = await userManagerLogic.getUser(inputData);
        res.status(200).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body,
            params: {
                userId: req.params.userId
            }
        };

        const { message } = await userManagerLogic.updateUser(inputData);
        res.status(200).send({ message: message });
    } catch (error) {
        return next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const inputData = {
            params: {
                userId: req.params.userId
            }
        };

        const { message } = await userManagerLogic.deleteUser(inputData);
        res.status(200).send({ message: message });
    } catch (error) {
        return next(error);
    }
};

module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
