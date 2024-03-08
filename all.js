'use strict';

// Turn on everything.  Requires all of the optional dependencies.
module.exports = [
  ...require('./ignores.js'),
  ...require('./js'),
  ...require('./mjs'),
  ...require('./ts'),
  ...require('./jsdoc'),
  ...require('./jsdoc_ts'),
  ...require('./ava'),
  ...require('./markdown'),
];
