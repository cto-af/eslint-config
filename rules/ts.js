import {builtinRules} from 'eslint/use-at-your-own-risk';
import ts from 'typescript-eslint';

const originalDisabled = {};
builtinRules.forEach((_, r) => {
  // @ts-expect-error TODO(hildjj): fix types
  if (ts.plugin.rules[r]) {
    // @ts-expect-error TODO(hildjj): fix types
    originalDisabled[r] = 'off';
  }
});

/* eslint meta/no-unused-rules: ["error", {ignore: ["@stylistic"]}] */

/** @import {RulesConfig} from '@eslint/core' */
/** @type {Partial<RulesConfig>}*/
export const rules = {
  // [original disabled for extension](https://typescript-eslint.io/rules/?=extension#extension-rules)
  ...originalDisabled,

  // [@typescript-eslint/eslint-recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts)
  ...ts.configs.eslintRecommended.rules,

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
  '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
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
  '@typescript-eslint/member-ordering': ['error', {
    default: {
      memberTypes: [
        // Index signature
        'signature',
        'call-signature',

        // Fields
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        '#private-static-field',

        'public-decorated-field',
        'protected-decorated-field',
        'private-decorated-field',

        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        '#private-instance-field',

        'public-abstract-field',
        'protected-abstract-field',

        'public-field',
        'protected-field',
        'private-field',
        '#private-field',

        'static-field',
        'instance-field',
        'abstract-field',

        'decorated-field',

        'field',

        // Static initialization
        'static-initialization',

        // Constructors
        'public-constructor',
        'protected-constructor',
        'private-constructor',

        'constructor',

        // Accessors
        'public-static-accessor',
        'protected-static-accessor',
        'private-static-accessor',
        '#private-static-accessor',

        'public-decorated-accessor',
        'protected-decorated-accessor',
        'private-decorated-accessor',

        'public-instance-accessor',
        'protected-instance-accessor',
        'private-instance-accessor',
        '#private-instance-accessor',

        'public-abstract-accessor',
        'protected-abstract-accessor',

        'public-accessor',
        'protected-accessor',
        'private-accessor',
        '#private-accessor',

        'static-accessor',
        'instance-accessor',
        'abstract-accessor',

        'decorated-accessor',

        'accessor',

        // Getters/Setters
        ['public-static-get', 'public-static-set'],
        ['protected-static-get', 'protected-static-set'],
        ['private-static-get', 'private-static-set'],
        ['#private-static-get', '#private-static-set'],

        ['public-decorated-get', 'public-decorated-set'],
        ['protected-decorated-get', 'protected-decorated-set'],
        ['private-decorated-get', 'private-decorated-set'],

        ['public-instance-get', 'public-instance-set'],
        ['protected-instance-get', 'protected-instance-set'],
        ['private-instance-get', 'private-instance-set'],
        ['#private-instance-get', '#private-instance-set'],

        ['public-abstract-get', 'public-abstract-set'],
        ['protected-abstract-get', 'protected-abstract-set'],

        ['public-get', 'public-set'],
        ['protected-get', 'protected-set'],
        ['private-get', 'private-set'],
        ['#private-get', '#private-set'],

        ['static-get', 'static-set'],
        ['instance-get', 'instance-set'],
        ['abstract-get', 'abstract-set'],

        ['decorated-get', 'decorated-set'],

        ['get', 'set'],

        // Methods
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        '#private-static-method',

        'public-decorated-method',
        'protected-decorated-method',
        'private-decorated-method',

        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
        '#private-instance-method',

        'public-abstract-method',
        'protected-abstract-method',

        'public-method',
        'protected-method',
        'private-method',
        '#private-method',

        'static-method',
        'instance-method',
        'abstract-method',

        'decorated-method',

        'method',
      ],
    },
  }],
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  '@typescript-eslint/naming-convention': 'off', // Too late
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-array-delete': 'error',
  '@typescript-eslint/no-base-to-string': 'off', // Can't config
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'off', // Can't config
  '@typescript-eslint/no-deprecated': 'error', // See how this works in practce.
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
  '@typescript-eslint/no-misused-spread': 'off', // Can't turn off [...string]
  '@typescript-eslint/no-mixed-enums': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-redeclare': 'off', // Not recommended
  '@typescript-eslint/no-redundant-type-constituents': 'off', // Can't config
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-restricted-imports': 'off', // Not needed
  '@typescript-eslint/no-restricted-types': 'off', // Not needed
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // Can't config
  '@typescript-eslint/no-unnecessary-condition': 'off', // Can't config
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'off', // Can't config
  '@typescript-eslint/no-unnecessary-template-expression': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'off', // Can't config
  '@typescript-eslint/no-unnecessary-type-assertion': 'off', // Can't config
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unnecessary-type-conversion': 'error',
  '@typescript-eslint/no-unnecessary-type-parameters': 'error', // Warning: preliminary
  '@typescript-eslint/no-unsafe-argument': 'off', // Can't config
  '@typescript-eslint/no-unsafe-assignment': 'off', // Can't config
  '@typescript-eslint/no-unsafe-call': 'off', // Can't config
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'off', // Can't config
  '@typescript-eslint/no-unsafe-return': 'off', // Can't config
  '@typescript-eslint/no-unsafe-type-assertion': 'off', // Used all the time
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  '@typescript-eslint/no-unused-expressions': 'error',
  '@typescript-eslint/no-unused-private-class-members': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error', {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^(_|ignore)',
      varsIgnorePattern: '^_[^_]',
      reportUsedIgnorePattern: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-useless-default-assignment': 'off', // I prefer both belt and suspenders
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/no-wrapper-object-types': 'error', // Turn off in cbor projects
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
  '@typescript-eslint/related-getter-setter-pairs': 'error',
  '@typescript-eslint/require-array-sort-compare': 'off', // Can't config
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'off', // Can't config
  '@typescript-eslint/restrict-template-expressions': 'off', // Can't config
  '@typescript-eslint/return-await': 'error',
  '@typescript-eslint/strict-boolean-expressions': 'off', // Can't config
  '@typescript-eslint/strict-void-return': 'off', // Can't configure to except event handlers
  '@typescript-eslint/switch-exhaustiveness-check': 'off', // Can't config
  '@typescript-eslint/triple-slash-reference': 'error',
  // Deprecated
  // '@typescript-eslint/typedef': 'error',
  '@typescript-eslint/unbound-method': 'off', // Can't config
  '@typescript-eslint/unified-signatures': 'off', // Too hard
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

  // These are the stylistic rules that require TS.  All of the
  // others from the JS rules should work as-is.
  // [Stylistc](https://eslint.style/packages/ts#rules)
  '@stylistic/member-delimiter-style': 'error',
  '@stylistic/type-annotation-spacing': 'error',
  '@stylistic/type-generic-spacing': 'error',
  '@stylistic/type-named-tuple-spacing': 'error',
};
