'use strict'
// Use this in typescript projects

// module.exports = {
//   extends: '@cto.af/eslint-config/typescript'
// }

module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        './ts.js',
      ],
    },
  ],
}
