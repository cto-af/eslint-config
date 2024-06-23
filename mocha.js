'use strict';

const globals = require('globals');
const mocha = require('eslint-plugin-mocha');

module.exports = [{
  files: [
    'test/**/*.spec.js',
    'test/**/*.spec.ts',
    'test/**/*.spec.cjs',
    'test/**/*.spec.mjs',
    'tests/**/*.spec.js',
    'tests/**/*.spec.ts',
    'tests/**/*.spec.cjs',
    'tests/**/*.spec.mjs',
    'test/**/*.test.js',
    'test/**/*.test.ts',
    'test/**/*.test.cjs',
    'test/**/*.test.mjs',
    'tests/**/*.test.js',
    'tests/**/*.test.ts',
    'tests/**/*.test.cjs',
    'tests/**/*.test.mjs',

  ],
  languageOptions: {
    globals: globals.mocha,
  },
  plugins: {
    mocha,
  },
  rules: {
    ...mocha.configs.recommended.rules,
    'mocha/no-mocha-arrows': 'off',
  },
}];
