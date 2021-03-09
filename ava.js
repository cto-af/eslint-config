'use strict'

// intended to be used in the `test` subdir, with:
//
// module.exports = {
//   extends: '@cto.af/eslint-config/ava'
// }
//
// and a root config like:
//
// module.exports = {
//   root: true,
//   extends: '@cto.af'
// }

module.exports = {
  plugins: [
    'ava'
  ],
  rules: {
    'ava/assertion-arguments': 'error',
    'ava/no-async-fn-without-await': 'error',
    'ava/no-duplicate-modifiers': 'error',
    'ava/no-identical-title': 'error',
    'ava/no-ignored-test-files': 'error',
    'ava/no-incorrect-deep-equal': 'error',
    'ava/no-invalid-end': 'error',
    'ava/no-nested-tests': 'error',
    'ava/no-only-test': 'error',
    'ava/no-skip-assert': 'error',
    'ava/no-skip-test': 'error',
    'ava/no-statement-after-end': 'error',
    'ava/no-todo-test': 'error',
    'ava/no-unknown-modifiers': 'error',
    'ava/prefer-t-regex': 'error',
    'ava/test-ended': 'error',
    'ava/test-title-format': 'error',
    'ava/test-title': 'error',
    'ava/use-t-throws-async-well': 'error',
    'ava/use-t-well': 'error',
    'ava/use-t': 'error',
    'ava/use-test': 'error'
  }
}
