'use strict';

const {rules} = require('./rules/ava.js');
const ava = require('eslint-plugin-ava');

module.exports = {
  files: [
    'test/**.test.*',
    'test/**.ava.*',
    'test/**.spec.*',
    'ava/**.test.*',
    'ava/**.ava.*',
    'ava/**.spec.*',
  ],
  plugins: {
    ava,
  },
  rules,
};
