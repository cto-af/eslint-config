'use strict';

const {rules} = require('./rules/ava.js');
module.exports = [{
  files: [
    '**/test/**.test.*',
    '**/test/**.ava.*',
    '**/test/**.spec.*',
    '**/ava/**.test.*',
    '**/ava/**.ava.*',
    '**/ava/**.spec.*',
  ],
  plugins: {
    ava: require('eslint-plugin-ava'),
  },
  rules,
}];
