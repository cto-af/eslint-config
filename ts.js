'use strict';

const {rules} = require('./rules/ts.js');
const tslint = require('typescript-eslint');

module.exports = [{
  files: ['**/*.ts'],
  ignores: [
    'coverage/**',
    'node_modules/**',
    'docs/**',
  ],
  ...tslint.configs.base,
  rules,
}];

module.exports[0].languageOptions.parserOptions = {
  // It's undefined for now, but just in case.
  ...module.exports[0].languageOptions.parserOptions,
  project: true,
};
