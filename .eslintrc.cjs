module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'import',
    'unused-imports',
  ],
  rules: {
    'no-console': 'error',
    'no-var': 'error',
    'prefer-template': 'error',
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'dot-notation': 'error',
    'no-useless-concat': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'function',
      },
      {
        format: ['PascalCase'],
        selector: 'interface',
      },
      {
        format: ['PascalCase'],
        selector: 'typeAlias',
      },
    ],
  },
  'import/order': [
    'warn',
    {
      groups: [
        'index',
        'sibling',
        'parent',
        'internal',
        'external',
        'builtin',
        'object',
        'type',
      ],
    },
  ],
  'unused-imports/no-unused-imports': 'error',
  'import/newline-after-import': ['error', { count: 1 }],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: 'const', next: 'return' },
  ],
};
