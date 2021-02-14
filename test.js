'use strict'

module.exports = {
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  reportUnusedDisableDirectives: true,
  rules: {
    // [foo]
    // [ECMAScript 6]
    'arrow-body-style': 'error',
    'arrow-spacing': 'error',

    // [Possible Errors](https://eslint.org/docs/rules/#possible-errors)
    foo: 'error'
  }
}
