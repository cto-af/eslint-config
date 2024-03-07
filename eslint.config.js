'use strict';

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'test/**',
    ],
  },
  require('./js'),
  require('./mjs'),
  require('./ts'),
  require('./jsdoc'),
  require('./jsdoc_ts.js'),
  require('./ava'),
  {
    files: [
      'rules/*.js',
    ],
    plugins: {
      hildjj: require('@hildjj/sort-rules'),
    },
    rules: {
      'hildjj/sort-rules': 'error',
    },
  },
];
