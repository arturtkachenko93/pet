import { Sequelize } from 'sequelize';
import config from '../config.js';
import UserModel from './user/user-model.js';
import RefreshTokenModel from './user/token-model.js';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

export const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

const db = {
    Sequelize,
    sequelize,
};

db.UserModel = UserModel(sequelize);
db.RefreshTokenModel = RefreshTokenModel(sequelize, db.UserModel);

export default db;
