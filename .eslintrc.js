module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'import',
    'vuejs-accessibility',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
  },
  overrides: [
    {
      files: [
        '**/*.test.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        './*',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: '*.html',
      rules: {
        'vue/comment-directive': 'off',
      },
    },
  ],
};
