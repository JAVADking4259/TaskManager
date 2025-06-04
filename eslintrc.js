module.exports = {
    plugins: ['@stylistic', 'prettier'],
    parserOptions: { ecmaVersion: 'latest' },
    rules: {
        '@stylistic/key-spacing': [
            'error',
            {
                afterColon: true,
                mode: 'strict'
            }
        ],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/max-len': ['off'],
        '@stylistic/comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        '@stylistic/comma-dangle': ['error', 'never'],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/arrow-parens': ['error', 'always'],
        '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
        '@stylistic/space-in-parens': ['error', 'never'],
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
        '@stylistic/linebreak-style': ['off'],
        '@stylistic/space-before-blocks': ['error', 'always'],
        '@stylistic/arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        '@stylistic/brace-style': ['error', '1tbs'],
        'prettier/prettier': 'error'
    }
};