/* eslint-disable capitalized-comments */
'use strict';

module.exports = {
  rules: {
    // Check: @typescript-eslint

    // [@typescript-eslint/eslint-recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts)
    'constructor-super': 'off', // ts(2335) & ts(2377)
    'getter-return': 'off', // ts(2378)
    'no-const-assign': 'off', // ts(2588)
    'no-dupe-args': 'off', // ts(2300)
    'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
    'no-dupe-keys': 'off', // ts(1117)
    'no-func-assign': 'off', // ts(2630)
    'no-import-assign': 'off', // ts(2632) & ts(2540)
    'no-obj-calls': 'off', // ts(2349)
    'no-redeclare': 'off', // ts(2451)
    'no-setter-return': 'off', // ts(2408)
    'no-this-before-super': 'off', // ts(2376) & ts(17009)
    'no-undef': 'off', // ts(2304) & ts(2552)
    'no-unreachable': 'off', // ts(7027)
    'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
    'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
    'prefer-const': 'error', // ts provides better types with const
    'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
    'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply

    // [original disabled for extension](https://typescript-eslint.io/rules/?=extension#extension-rules)
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-param-last': 'off',
    'dot-notation': 'off',
    'init-declarations': 'off',
    'max-params': 'off',
    'no-array-constructor': 'off',
    // 'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-loss-of-precision': 'off',
    // 'no-magic-numbers': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
    'require-await': 'off',

    // [typescript-eslint](https://typescript-eslint.io/rules/)
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'off', // Can't config
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      'minimumDescriptionLength': 3,
    }],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': 'off', // Not needed
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
    '@typescript-eslint/class-methods-use-this': 'error',
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],
    '@typescript-eslint/consistent-indexed-object-style': [
      'error',
      'index-signature',
    ],
    '@typescript-eslint/consistent-return': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {assertionStyle: 'as', objectLiteralTypeAssertions: 'allow'},
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': 'off', // Can't config
    '@typescript-eslint/consistent-type-imports': 'off', // Can't do mixed
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': ['error', {
      allowIndexSignaturePropertyAccess: true,
    }],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/init-declarations': 'error',
    '@typescript-eslint/max-params': ['error', {max: 4}],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/naming-convention': 'off', // Too late
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-base-to-string': 'off', // Can't config
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'off', // Can't config
    '@typescript-eslint/no-dupe-class-members': 'off', // Not recommended
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // Too hard
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'off', // Can't config
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-magic-numbers': 'off', // Too late
    '@typescript-eslint/no-meaningless-void-operator': 'off', // Can't config
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'off', // Can't config
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redeclare': 'off', // Not recommended
    '@typescript-eslint/no-redundant-type-constituents': 'off', // Can't config
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-restricted-imports': 'off', // Not needed
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-condition': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-qualifier': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off', // Can't config
    '@typescript-eslint/no-unsafe-assignment': 'off', // Can't config
    '@typescript-eslint/no-unsafe-call': 'off', // Can't config
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'off', // Can't config
    '@typescript-eslint/no-unsafe-return': 'off', // Can't config
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error', {
        args: 'none',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^(_|ignore)',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off', // Can't config
    '@typescript-eslint/only-throw-error': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-destructuring': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'off', // Can't config
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off', // Can't config
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': 'error',
    '@typescript-eslint/prefer-readonly': 'off', // Can't config
    '@typescript-eslint/prefer-readonly-parameter-types': 'off', // Can't config
    '@typescript-eslint/prefer-reduce-type-parameter': 'off', // Can't config
    '@typescript-eslint/prefer-regexp-exec': 'off', // Can't config
    '@typescript-eslint/prefer-return-this-type': 'off', // Can't config
    '@typescript-eslint/prefer-string-starts-ends-with': 'off', // Can't config
    '@typescript-eslint/promise-function-async': 'off', // Can't config
    '@typescript-eslint/require-array-sort-compare': 'off', // Can't config
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'off', // Can't config
    '@typescript-eslint/restrict-template-expressions': 'off', // Can't config
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off', // Can't config
    '@typescript-eslint/switch-exhaustiveness-check': 'off', // Can't config
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unbound-method': 'off', // Can't config
    '@typescript-eslint/unified-signatures': 'off', // Too hard
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

    // These are the stylistic rules that require TS.  All of the
    // others from the JS rules should work as-is.
    // [Stylistc](https://eslint.style/packages/default)
    '@stylistic/member-delimiter-style': 'error',
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
  },
};
