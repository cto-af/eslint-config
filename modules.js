'use strict'

// Use this in type="modules" projects

// module.exports = {
//   extends: '@cto.af/eslint-config/modules'
// }

module.exports = {
  extends: [
    './index.js',
  ],
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: '2021',
      },
      rules: {
        // [Possible Errors](https://eslint.org/docs/rules/#possible-errors)
        'node/no-unsupported-features/es-syntax': [
          'error',
          {
            version: '>=12.19',
            ignores: ['modules'],
          },
        ],
      },
    },
  ],
}