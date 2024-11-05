export default {
    development: {
        username: 'admin',
        password: 'admin',
        database: 'archibracho',
        port: 5432,
        host: 'localhost',
        dialect: 'postgres',
        autoLoadModels: true,
    },
    test: {
        username: 'your_username',
        password: 'your_password',
        database: 'your_test_database',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: 'your_username',
        password: 'your_password',
        database: 'your_production_database',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
};
