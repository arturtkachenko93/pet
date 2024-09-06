module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    rules: {
        'import-notation': 'string',
        'selector-class-pattern': '^([a-z0-9]+(?:-[a-z0-9]+)*)|([a-z0-9]+(?:[A-Z][a-z0-9]+)*)$',
    },
};
