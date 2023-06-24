'use strict'

// Use when you're going to generate docs with JSDoc.

// module.exports = {
//   extends: '@cto.af/eslint-config/jsdoc'
// }
//

module.exports = {
  plugins: [
    'jsdoc',
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        extends: 'extends',
      },
    },
  },
  rules: {
    // [Stylistic Issues](https://eslint.org/docs/rules/#stylistic-issues)
    'jsdoc/require-jsdoc': ['error', {
      publicOnly: {ancestorsOnly: true},
    }],

    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    // https://github.com/eslint/eslint/issues/14745
    'jsdoc/check-examples': 'off',
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-line-alignment': ['error', 'never', {
      wrapIndent: '  ',
    }],
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/imports-as-dependencies': 'error',
    'jsdoc/informative-docs': 'off', // This sounds annoying
    'jsdoc/match-description': 'error',
    'jsdoc/match-name': 'off',
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/no-blank-blocks': 'error',
    'jsdoc/no-blank-block-descriptions': 'off', // I use blank lines intentionally
    'jsdoc/no-defaults': 'off',
    'jsdoc/no-missing-syntax': 'off',
    'jsdoc/no-multi-asterisks': 'error',
    'jsdoc/no-restricted-syntax': 'off',
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'off', // Use typedoc
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': ['error', {exemptedBy: ['inheritdoc', 'private', 'ignore']}],
    'jsdoc/require-description-complete-sentence': 'error',
    'jsdoc/require-example': 'off',
    'jsdoc/require-file-overview': 'off',
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
    'jsdoc/require-param': ['error', {exemptedBy: ['inheritdoc', 'private', 'ignore']}],
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-description': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-returns': ['error', {
      exemptedBy: ['ignore'],
    }],
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-throws': 'error',
    'jsdoc/require-yields': 'error',
    'jsdoc/require-yields-check': 'error',
    'jsdoc/sort-tags': 'error',
    'jsdoc/tag-lines': 'off',
    'jsdoc/text-escaping': 'off', // Painful
    'jsdoc/valid-types': 'error',
  },
}
