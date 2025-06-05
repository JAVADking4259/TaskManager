const AuthModel = require('../services/auth/auth.model');
const Tools = require('../helpers/Tools');

const AuthenticationMiddleware =
    (options = { assert: true }) =>
    async (req, res, next) => {
        try {
            const token = Tools.extractToken({
                headers: req.headers
            });

            const auth = await AuthModel.findOne({ accessToken: token });
            if (!auth) {
                throw {
                    message: 'لطفا دوباره وارد شوید'
                };
            }

            const accessTokenIsValid = await Tools.verifyToken({
                token: auth.accessToken,
                secretKey: process.env.SECRET_KEY
            });
            let payload;
            if (accessTokenIsValid) {
                payload = Tools.extractTokenPayload(auth.accessToken);
            } else {
                throw {
                    message: 'احراز هویت نامعتبر است'
                };
            }
            req.authenticatedUser = {
                id: payload.id,
                role: payload.role
            };
            req.token = token;
        } catch (err) {
            if (options.assert) next(err);
        }
        next();
    };

module.exports = AuthenticationMiddleware;
