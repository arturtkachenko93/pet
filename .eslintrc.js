// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint', 'react', 'unused-imports', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:storybook/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    parser: '@typescript-eslint/parser',
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/react-in-jsx-scope': ['off'],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 100,
            },
        ],
        'react/prop-types': 'off',
        'react/display-name': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['build', '.eslintrc.js'],
};
