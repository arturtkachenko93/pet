import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import MailService from './mail-service.js';
import tokenService from './token-service.js';
import TokenService from './token-service.js';
import { userDto } from '../dtos/user-dto.js';
import db from '../models/index.js';
import ApiError from '../exceptions/api-error.js';

const UserService = () => {
    const userModel = db.UserModel;

    return {
        registration: async function (email, password) {
            const userCandidate = await userModel.findOne({
                where: {
                    email,
                },
            });

            if (userCandidate) {
                throw ApiError.BadRequest('Пользователь уже зарегистрирован!');
            }

            const hashPassword = await bcrypt.hash(password, 3);

            const activationLink = uuidv4();
            const user = await userModel.create({
                email,
                password: hashPassword,
                activationLink,
            });

            await MailService().sendActivationMail(
                email,
                `${process.env.API_URL}/api/activate/${activationLink}`,
            );

            const userdto = userDto(user);

            const tokens = await tokenService().generateToken({ ...userdto });

            await tokenService().saveToken(userdto.id, tokens.refreshToken);

            return {
                ...tokens,
                user: userdto,
            };
        },

        activate: async function (activationLink) {
            const user = await userModel.findOne({
                where: {
                    activationLink,
                },
            });

            if (!user) {
                throw ApiError.BadRequest('Некорректная ссылка активации!');
            }

            user.isActivated = true;
            await user.save();
        },

        login: async function (email, password) {
            const user = await userModel.findOne({
                where: {
                    email,
                },
            });

            if (!user) {
                throw ApiError.BadRequest('Пользователь с таким email не найден!');
            }

            const isPassCorrect = await bcrypt.compare(password, user.password);

            if (!isPassCorrect) {
                throw ApiError.BadRequest('Введен неверный пароль!');
            }

            const userdto = userDto(user);

            const tokens = await TokenService().generateToken({ ...userdto });

            await TokenService().saveToken(userdto.id, tokens.refreshToken);

            return {
                ...tokens,
                user: userdto,
            };
        },

        logout: async function (token) {
            await TokenService().removeToken(token);
        },

        refresh: async function (token) {
            if (!token) {
                throw ApiError.UnathorizedError();
            }

            const userData = TokenService().validateRefreshToken(token);

            const tokenFromDb = await TokenService().findToken(token);

            if (!userData || !tokenFromDb) {
                throw ApiError.UnathorizedError();
            }

            const user = userModel.findByPk(userData.id);

            const userdto = userDto(user);

            const tokens = await tokenService().generateToken({ ...userdto });

            await tokenService().saveToken(userdto.id, tokens.refreshToken);

            return {
                ...tokens,
                user: userdto,
            };
        },

        getUsers: async function () {
            return await userModel.findAll();
        },
    };
};

export default UserService;
