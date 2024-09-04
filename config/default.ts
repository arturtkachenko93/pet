import { getConfig } from './getConfig';

const defaultConfig = {
    NODE_ENV: process.env.NODE_ENV,
};

export type TDefaultConfig = typeof defaultConfig

const {
    NODE_ENV
} = getConfig(defaultConfig);

export default {
    client: {
        env: NODE_ENV,
        test: 'dev'
    },
    server: {
        env: NODE_ENV
    }
};