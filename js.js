'use strict';

const globals = require('globals');
const {rules} = require('./rules/js.js');

module.exports = {
  files: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.ts',
  ],
  ignores: [
    'coverage/**',
    'node_modules/**',
    'docs/**',
  ],
  plugins: {
    '@stylistic': require('@stylistic/eslint-plugin'),
    'n': require('eslint-plugin-n'),
  },
  languageOptions: {
    globals: globals.node,
    ecmaVersion: 2022,
    sourceType: 'commonjs',
  },
  rules,
};
