const AuthLogic = require('./auth.logic');

const login = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body
        };

        const { message, data } = await AuthLogic.login(inputData);
        res.status(200).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

const signup = async (req, res, next) => {
    try {
        const inputData = {
            body: req.body
        };

        const { message, data } = await AuthLogic.signup(inputData);
        res.status(200).send({ message: message, data: data });
    } catch (error) {
        return next(error);
    }
};

module.exports = { login, signup };
