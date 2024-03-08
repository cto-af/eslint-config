'use strict';

const {rules} = require('./rules/jsdoc.js');
module.exports = [{
  files: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.ts',
  ],
  plugins: {
    jsdoc: require('eslint-plugin-jsdoc'),
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        extends: 'extends',
      },
    },
  },
  rules,
}];
