const SchemaValidatorMiddleware = (
    schema,
    options = {
        abortEarly: false,
        stripUnknown: true
    }
) =>
    async (req, res, next) => {
        try {
            req.body = await schema().validate(req.body, options);
        } catch (err) {
            if (err && err.inner) {
                const validationErrors = err.inner.map((innerErr) => ({
                    path: innerErr.path,
                    message: innerErr.errors[0]
                }));
                return res.status(400).json({ message: 'Validation failed', errors: validationErrors });
            }
            return next('مشکلی پیش آمده است');
        }
        return next();
    };

module.exports = SchemaValidatorMiddleware;
