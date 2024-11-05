import UserService from '../service/user-service.js';
import { validationResult } from 'express-validator';
import ApiError from '../exceptions/api-error.js';

const UserController = () => {
    return {
        registration: async function (req, res, next) {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return next(ApiError.BadRequest('Ошибка валидации'), errors.array());
                }

                const { email, password } = req.body;

                const userData = await UserService().registration(email, password);

                res.cookie('refreshToken', userData?.refreshToken, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                });

                return res.status(201).json(userData);
            } catch (e) {
                next(e);
            }
        },

        login: async function (req, res, next) {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    return next(ApiError.BadRequest('Ошибка валидации'), errors.array());
                }

                const { email, password } = req.body;

                const loginData = await UserService().login(email, password);

                res.cookie('refreshToken', loginData?.refreshToken, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                });

                res.json(loginData);
            } catch (e) {
                next(e);
            }
        },

        logout: async function (req, res, next) {
            try {
                const { refreshToken } = req?.cookies;

                await UserService().logout(refreshToken);

                res.clearCookie(refreshToken);

                res.json({ message: 'Вы успешно вышли из системы!' });
            } catch (e) {
                next(e);
            }
        },

        activate: async function (req, res, next) {
            try {
                const activatedLink = req.params.link;

                await UserService().activate(activatedLink);

                return res.send(`<h1>Заебись водичка</h1>`);
            } catch (e) {
                next(e);
            }
        },

        refresh: async function (req, res, next) {
            try {
                const { refreshToken } = req.cookie();

                const userData = await UserService().refresh(refreshToken);

                res.cookie('refreshToken', loginData?.refreshToken, {
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                });

                res.send.json(userData);
            } catch (e) {
                next(e);
            }
        },

        users: async function (req, res, next) {
            try {
                const users = await UserService().getUsers();

                res.json(users);
            } catch (e) {
                next(e);
            }
        },
    };
};

export default UserController();
