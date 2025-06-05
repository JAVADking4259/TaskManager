const yup = require('yup');

const loginAndSignupSchema = () =>
    yup.object().shape({
        userName: yup.string().required('نام کاربری الزامی است'),
        password: yup.string().required('رمزی برای خود انتخاب کنید')
    });

module.exports = { loginAndSignupSchema };
