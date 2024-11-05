import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './router/index.js';
import db from './models/index.js';
import errorMiddleware from './middlewares/error-middleware.js';

const server = express();
dotenv.config();

const corsOOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

db.sequelize
    .sync({ force: false })
    .then(() => {
        console.log('База данных синхронизирована');
    })
    .catch((err) => {
        console.error('Ошибка синхронизации базы данных:', err);
    });

//middleware для настройки cors
server.use(cors(corsOOptions));
//middleware для получения body в формате JSON
server.use(express.json());
server.use(cookieParser());
server.use('/api', router);
server.use(errorMiddleware);

const PORT = process.env.PORT || 4001;

const start = async () => {
    try {
        server.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};

start().then((r) => r);
