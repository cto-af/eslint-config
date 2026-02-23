/* eslint meta/no-unused-rules: ["error", {ignore: ["n"]}] */

/** @import {RulesConfig} from '@eslint/core' */
/** @type {Partial<RulesConfig>}*/
export const rules = {
  // [ava](https://github.com/avajs/eslint-plugin-ava?tab=readme-ov-file#rules)
  'ava/assertion-arguments': 'error',
  'ava/failing-test-url': 'error',
  'ava/hooks-order': 'error',
  'ava/max-asserts': 'off',
  'ava/no-async-fn-without-await': 'error',
  'ava/no-ava-in-dependencies': 'error',
  'ava/no-commented-tests': 'error',
  'ava/no-conditional-assertion': 'error',
  'ava/no-duplicate-hooks': 'error',
  'ava/no-identical-title': 'error',
  'ava/no-ignored-test-files': 'off', // Buggy
  'ava/no-import-test-files': 'error',
  'ava/no-incorrect-deep-equal': 'error',
  'ava/no-inline-assertions': 'error',
  'ava/no-invalid-modifier-chain': 'error',
  'ava/no-negated-assertion': 'error',
  'ava/no-nested-assertions': 'error',
  'ava/no-nested-tests': 'error',
  'ava/no-only-test': 'error',
  'ava/no-skip-assert': 'error',
  'ava/no-skip-test': 'error',
  'ava/no-todo-implementation': 'error',
  'ava/no-todo-test': 'error',
  'ava/no-useless-t-pass': 'error',
  'ava/prefer-async-await': 'error',
  'ava/prefer-power-assert': 'off',
  'ava/prefer-t-regex': 'error',
  'ava/prefer-t-throws': 'error',
  'ava/require-assertion': 'error',
  'ava/test-title': 'error',
  'ava/test-title-format': 'error',
  'ava/use-t': 'error',
  'ava/use-t-throws-async-well': 'error',
  'ava/use-t-well': 'error',
  'ava/use-test': 'error',
  'ava/use-true-false': 'off',

  // [Possible Errors](https://github.com/eslint-community/eslint-plugin-n#possible-errors)
  'n/no-extraneous-import': ['error', {
    // This is an extraneous error because of the way ava is built and the
    // way that esplugin-n finds depedencies.
    allowModules: ['ava'],
  }],
  'n/no-extraneous-require': ['error', {allowModules: ['ava']}],
};
