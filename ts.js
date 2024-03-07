'use strict';

const {rules} = require('./rules/ts.js');
const tslint = require('typescript-eslint');

module.exports = {
  files: ['**/*.ts'],
  ignores: [
    'coverage/**',
    'node_modules/**',
    'docs/**',
  ],
  ...tslint.configs.base,
  rules,
};
module.exports.languageOptions.parserOptions.project = true;
