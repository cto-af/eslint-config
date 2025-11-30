/** @import {RulesConfig} from '@eslint/core' */
/** @type {Partial<RulesConfig>}*/
export const rules = {
  // Check: jsdoc
  // [Stylistic Issues](https://eslint.org/docs/rules/#stylistic-issues)

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
  'jsdoc/check-template-names': 'error',
  'jsdoc/check-types': 'error',
  'jsdoc/check-values': 'error',
  'jsdoc/convert-to-jsdoc-comments': 'off', // Seems odd
  'jsdoc/empty-tags': 'error',
  'jsdoc/escape-inline-tags': 'warn', // Provisional.
  'jsdoc/implements-on-classes': 'error',
  'jsdoc/imports-as-dependencies': 'error',
  'jsdoc/informative-docs': 'off', // This sounds annoying
  'jsdoc/lines-before-block': 'error',
  'jsdoc/match-description': 'error',
  'jsdoc/match-name': 'off',
  'jsdoc/multiline-blocks': 'error',
  'jsdoc/no-bad-blocks': 'error',
  'jsdoc/no-blank-block-descriptions': 'off', // I use blank lines intentionally
  'jsdoc/no-blank-blocks': 'error',
  'jsdoc/no-defaults': 'off',
  'jsdoc/no-missing-syntax': 'off',
  'jsdoc/no-multi-asterisks': 'error',
  'jsdoc/no-restricted-syntax': 'off',
  'jsdoc/no-types': 'off',
  'jsdoc/no-undefined-types': 'off', // Use typedoc
  'jsdoc/prefer-import-tag': 'error',
  'jsdoc/reject-any-type': 'warn',
  'jsdoc/reject-function-type': 'off', // I use this.
  'jsdoc/require-asterisk-prefix': 'error',
  'jsdoc/require-description': ['error', {exemptedBy: ['inheritdoc', 'private', 'ignore']}],
  'jsdoc/require-description-complete-sentence': 'error',
  'jsdoc/require-example': 'off',
  'jsdoc/require-file-overview': 'off',
  'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
  'jsdoc/require-jsdoc': ['error', {
    publicOnly: {ancestorsOnly: true},
  }],
  'jsdoc/require-next-description': 'off', // Not used by typedoc
  'jsdoc/require-next-type': 'off', // Not used by typedoc
  'jsdoc/require-param': ['error', {exemptedBy: ['inheritdoc', 'private', 'ignore']}],
  'jsdoc/require-param-description': 'error',
  'jsdoc/require-param-name': 'error',
  'jsdoc/require-param-type': 'error',
  'jsdoc/require-property': 'error',
  'jsdoc/require-property-description': 'error',
  'jsdoc/require-property-name': 'error',
  'jsdoc/require-property-type': 'error',
  'jsdoc/require-rejects': 'off', // Sounds like a pain.
  'jsdoc/require-returns': ['error', {
    exemptedBy: ['ignore'],
  }],
  'jsdoc/require-returns-check': 'error',
  'jsdoc/require-returns-description': 'error',
  'jsdoc/require-returns-type': 'error',
  'jsdoc/require-tags': 'off', // Not useful
  'jsdoc/require-template': 'error',
  'jsdoc/require-template-description': 'error',
  'jsdoc/require-throws': 'error',
  'jsdoc/require-throws-description': 'error',
  'jsdoc/require-throws-type': 'error',
  'jsdoc/require-yields': 'error',
  'jsdoc/require-yields-check': 'error',
  'jsdoc/require-yields-description': 'error',
  'jsdoc/require-yields-type': 'error',
  'jsdoc/sort-tags': 'error',
  'jsdoc/tag-lines': 'off',
  'jsdoc/text-escaping': 'off', // Painful
  'jsdoc/ts-method-signature-style': ['error', 'method'],
  'jsdoc/ts-no-empty-object-type': 'error',
  'jsdoc/ts-no-unnecessary-template-expression': 'error',
  'jsdoc/ts-prefer-function-type': 'error',
  'jsdoc/type-formatting': 'off', // Experimental
  'jsdoc/valid-types': 'off', // Let TS check.
};
