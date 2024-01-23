'use strict';

// Last updated 2024-01-23
// "eslint": "8.56.0"
// "@stylistic/eslint-plugin": "1.5.4",
// "@typescript-eslint/eslint-plugin": "6.19.1"

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@stylistic'],
  rules: {
    // From plugin:@typescript-eslint/eslint-recommended
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-redeclare': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'valid-typeof': 'off',

    // For all of these that have a non-plugin "off" to go with them,
    // the typescript-eslint plugin provides a superset of the original
    // rule.
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'off', // Can't config
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
    }],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': 'off', // Not needed
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': 'error',
    'default-param-last': 'off',
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],
    '@typescript-eslint/consistent-indexed-object-style': [
      'error',
      'index-signature',
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {assertionStyle: 'as', objectLiteralTypeAssertions: 'allow'},
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': 'off', // Can't config
    '@typescript-eslint/consistent-type-imports': 'off', // Can't do mixed
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'off', // Can't config
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/init-declarations': 'error',
    'max-params': 'off',
    '@typescript-eslint/max-params': ['error', {max: 4}],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/naming-convention': 'off', // Too late
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-base-to-string': 'off', // Can't config
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'off', // Can't config
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // Too hard
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'off', // Can't config
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'off', // Can't config
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off', // Too late
    '@typescript-eslint/no-meaningless-void-operator': 'off', // Can't config
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'off', // Can't config
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'off', // Can't config
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-restricted-imports': 'off', // Not needed
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-condition': 'off', // Can't config
    '@typescript-eslint/no-unnecessary-qualifier': 'off', // Can't config
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
    'no-unused-vars': 'off',
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
    '@typescript-eslint/no-useless-template-literals': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off', // Can't config
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'off', // Can't config
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off', // Can't config
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off', // Can't config
    '@typescript-eslint/prefer-readonly': 'off', // Can't config
    '@typescript-eslint/prefer-reduce-type-parameter': 'off', // Can't config
    '@typescript-eslint/prefer-regexp-exec': 'off', // Can't config
    '@typescript-eslint/prefer-return-this-type': 'off', // Can't config
    '@typescript-eslint/prefer-string-starts-ends-with': 'off', // Can't config
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'off', // Can't config
    '@typescript-eslint/require-array-sort-compare': 'off', // Can't config
    '@typescript-eslint/require-await': 'off', // Can't config
    '@typescript-eslint/restrict-plus-operands': 'off', // Can't config
    '@typescript-eslint/restrict-template-expressions': 'off', // Can't config
    '@typescript-eslint/return-await': 'off', // Can't config
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off', // Can't config
    '@typescript-eslint/switch-exhaustiveness-check': 'off', // Can't config
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unbound-method': 'off', // Can't config
    '@typescript-eslint/unified-signatures': 'off', // Too hard

    // [Stylistc](https://eslint.style/packages/default)
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        enums: 'always-multiline',
        generics: 'never',
        tuples: 'always-multiline',
      },
    ],
    '@stylistic/comma-spacing': 'error',
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/computed-property-spacing': 'error',
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': 'error',
    '@stylistic/func-call-spacing': 'off', // Renamed
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/function-paren-newline': ['error', 'consistent'],
    '@stylistic/generator-star-spacing': 'error',
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent': ['error', 2], // Still broken?
    '@stylistic/indent-binary-ops': 'off', // Not good enough

    '@stylistic/jsx-child-element-spacing': 'off', // Not needed
    '@stylistic/jsx-closing-bracket-location': 'off', // Not needed
    '@stylistic/jsx-closing-tag-location': 'off', // Not needed
    '@stylistic/jsx-curly-brace-presence': 'off', // Not needed
    '@stylistic/jsx-curly-newline': 'off', // Not needed
    '@stylistic/jsx-curly-spacing': 'off', // Not needed
    '@stylistic/jsx-equals-spacing': 'off', // Not needed
    '@stylistic/jsx-first-prop-new-line': 'off', // Not needed
    '@stylistic/jsx-indent': 'off', // Not needed
    '@stylistic/jsx-indent-props': 'off', // Not needed
    '@stylistic/jsx-max-props-per-line': 'off', // Not needed
    '@stylistic/jsx-newline': 'off', // Not needed
    '@stylistic/jsx-one-expression-per-line': 'off', // Not needed
    '@stylistic/jsx-props-no-multi-spaces': 'off', // Not needed
    '@stylistic/jsx-quotes': 'off', // Not needed
    '@stylistic/jsx-self-closing-comp': 'off', // Not needed
    '@stylistic/jsx-sort-props': 'off', // Not needed
    '@stylistic/jsx-tag-spacing': 'off', // Not needed
    '@stylistic/jsx-wrap-multilines': 'off', // Not needed

    '@stylistic/key-spacing': ['error', {mode: 'minimum'}],
    '@stylistic/keyword-spacing': 'error',
    '@stylistic/linebreak-style': 'error',
    '@stylistic/lines-around-comment': ['error', {
      allowBlockStart: true,
      allowClassStart: true,
      allowEnumStart: true,
      allowInterfaceStart: true,
      allowModuleStart: true,
      allowTypeStart: true,
    }],
    '@stylistic/lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    '@stylistic/max-len': ['error', 80, {
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    '@stylistic/max-statements-per-line': 'off',
    '@stylistic/member-delimiter-style': 'error',
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/new-parens': 'error',
    '@stylistic/newline-per-chained-call': 'error',
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-parens': 'off', // Disagree
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', {max: 1}],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': 'error',
    '@stylistic/object-curly-newline': 'error',
    '@stylistic/object-curly-spacing': ['error', 'never'],
    '@stylistic/object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    '@stylistic/one-var-declaration-per-line': 'error',
    '@stylistic/operator-linebreak': ['error', 'after'],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/padding-line-between-statements': 'error',
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-spacing': 'error',
    '@stylistic/semi-style': ['error'],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': ['error', 'never'],
    '@stylistic/space-in-parens': 'error',
    '@stylistic/space-infix-ops': ['error', {int32Hint: false}],
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/spaced-comment': ['error', 'always'],
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/template-tag-spacing': 'error',
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-iife': 'error',
    '@stylistic/wrap-regex': 'off', // No.
    '@stylistic/yield-star-spacing': ['error', 'before'],
  },
};
