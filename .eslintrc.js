module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
    jest: true,
  },
  globals: {
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'import',
    'react',
    'react-native',
    '@typescript-eslint',
  ],
  rules: {
    'default-param-last': ['warn'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        'd.ts': 'never',
      },
    ],
    'no-param-reassign': ['warn'],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }], // disable the rule for variables, but enable it for functions and classes
    'react/function-component-definition': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/no-unstable-nested-components': ['warn'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx', '.d.ts'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        project: ['tsconfig.json', 'package/tsconfig.json'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  overrides: [
  ],
};
