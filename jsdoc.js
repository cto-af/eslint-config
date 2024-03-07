'use strict';

const {rules} = require('./rules/jsdoc.js');
const jsdoc = require('eslint-plugin-jsdoc');

module.exports = {
  files: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.ts',
  ],
  plugins: {
    jsdoc,
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        extends: 'extends',
      },
    },
  },
  rules,
};
