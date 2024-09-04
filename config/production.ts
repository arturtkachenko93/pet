import { getConfig } from './getConfig';

const defaultConfig = {
    NODE_ENV: process.env.NODE_ENV,
};

const {
    NODE_ENV,
} = getConfig(defaultConfig);

export default {
    client: {
        env: NODE_ENV,
        test: 'prod'
    },
    server: {
        env: NODE_ENV,
    }
};