import ApiError from '../exceptions/api-error.js';
import TokenService from '../service/token-service.js';

const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return next(ApiError.UnathorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];

        const userData = TokenService().validateAccessToken(accessToken);

        if (!userData) {
            return next(ApiError.UnathorizedError());
        }

        req.user = userData;

        next();
    } catch (e) {
        throw ApiError.UnathorizedError();
    }
};

export default authMiddleware;
