'use strict';

module.exports = {
  root: true,
  extends: [
    '@cto.af/eslint-config/typescript',
    '@cto.af/eslint-config/modules',
    '@cto.af/eslint-config/jsdoc',
  ],
  ignorePatterns: [
    'node_modules/',
  ],
  parserOptions: {
    ecmaVersion: '2022',
    project: true,
  },
};
