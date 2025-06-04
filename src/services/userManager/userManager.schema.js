const yup = require('yup');

const createUserSchema = () =>
    yup.object().shape({
        userName: yup.string().required('نام کاربری الزامی است'),
        password: yup.string().required('رمزی برای خود انتخاب کنید')
    });

module.exports = { createUserSchema };
