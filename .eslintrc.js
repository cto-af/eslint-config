'use strict'

module.exports = {
  extends: './index.js',
  plugins: ['hildjj', 'unicorn'],
  rules: {
    'hildjj/sort-rules': 'error'
    // 'unicorn/string-content': 'error'
  }
}
