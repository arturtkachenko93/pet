import jwt from 'jsonwebtoken';
import db from '../models/index.js';

const TokenService = () => {
    const refreshTokenModel = db.RefreshTokenModel;

    const validateAccessToken = (token) => {
        try {
            console.log('validate!');
            return jwt.verify(token, process.env.JWT_SECRET_ACCESS);
        } catch (e) {
            return null;
        }
    };
    const validateRefreshToken = (token) => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET_REFRESH);
        } catch (e) {
            return null;
        }
    };

    return {
        validateAccessToken,
        validateRefreshToken,
        generateToken: async function (payload) {
            const accessToken = jwt.sign(payload, process.env.JWT_SECRET_ACCESS, {
                expiresIn: '30m',
            });

            const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_REFRESH, {
                expiresIn: '30d',
            });

            return {
                refreshToken,
                accessToken,
            };
        },

        saveToken: async function (userId, refreshToken) {
            const tokenData = await refreshTokenModel.findOne({
                where: {
                    userId,
                },
            });

            if (tokenData) {
                tokenData.refreshToken = refreshToken;

                return tokenData.save();
            }

            return await refreshTokenModel.create({ user: userId, refreshToken });
        },

        removeToken: async function (refreshToken) {
            await refreshTokenModel.destroy({
                where: {
                    refreshToken,
                },
            });
        },

        findToken: async function (token) {
            await refreshTokenModel.findOne({
                where: {
                    token,
                },
            });
        },
    };
};

export default TokenService;
