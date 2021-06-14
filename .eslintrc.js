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
    'plugin:vuejs-accessibility/recommended',
    '@vue/airbnb',
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
  ],
};
