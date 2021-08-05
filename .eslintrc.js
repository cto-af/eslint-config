'use strict'

module.exports = {
  extends: './index.js',
  plugins: ['hildjj'],
  rules: {
    // eslint-disable-next-line hildjj/sort-rules
    'hildjj/sort-rules': 'error',
  },
}
