module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react',
        'unused-imports'
    ],
    'rules': {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',
        'unused-imports/no-unused-imports': 'error'
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
