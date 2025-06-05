const yup = require('yup');

const createTaskSchema = () =>
    yup.object().shape({
        title: yup.string().required('عنوانی برای وظیفه انتخاب کنید'),
        description: yup.string().required('وظیفه خود را شرح دهید')
    });

module.exports = { createTaskSchema };
