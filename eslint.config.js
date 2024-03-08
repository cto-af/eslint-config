'use strict';

module.exports = [
  {
    ignores: [
      'test/**',
    ],
  },
  ...require('./all.js'),
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
