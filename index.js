'use strict';

// Just the core rules, no optional dependencies needed.
module.exports = [
  ...require('./ignores.js'),
  ...require('./js'),
  ...require('./mjs'),
];
