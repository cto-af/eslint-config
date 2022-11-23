'use strict'

module.exports = {
  env: {
    node: true,
    es6: true,
    es2020: true,
  },
  plugins: [
    'node',
  ],
  ignorePatterns: [
    'coverage/',
    'node_modules/',
    'docs/',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    // Last updated 2022-02-10, v8.6.0
    // eslint-plugin-node 11.1.0

    // [Possible Problems](https://eslint.org/docs/rules/#possible-problems)
    'array-callback-return': ['error', {allowImplicit: true}],
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off', // I'll figure these out myself.
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': [
      'error', {
        args: 'none',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^ignore',
      },
    ],
    'no-use-before-define': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],

    // [Suggestions](https://eslint.org/docs/rules/#suggestions)
    'accessor-pairs': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    'camelcase': 'off', // If I had started with this.
    'capitalized-comments': ['error', 'always', {
      ignoreConsecutiveComments: true,
      ignorePattern: 'c8',
    }],
    'class-methods-use-this': 'warn',
    // This one is pedantic even for me.
    'complexity': 'off',
    'consistent-return': 'error',
    'consistent-this': 'off', // Not needed anymore with =>
    'curly': ['error', 'multi-line'],
    // I use exhastive cases a lot, which makes the default unreachable
    'default-case': 'off',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'always', {null: 'ignore'}],
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off', // Not needed
    'id-length': 'off', // Not needed
    'id-match': 'off', // Not needed
    'init-declarations': 'error',
    'logical-assignment-operators': ['error', 'never'],
    'max-classes-per-file': 'off', // No.
    'max-depth': 'off', // No.
    'max-lines': 'off', // No.
    'max-lines-per-function': 'off', // No.
    'max-nested-callbacks': 'off', // No.
    'max-params': ['error', 4],
    'max-statements': 'off', // No.
    'multiline-comment-style': ['error', 'separate-lines'],
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-alert': 'error',
    'no-bitwise': 'off', // Lol.  Not in these projects
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-continue': 'off', // Why?
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'off', // I disagree with this one.
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off', // Meta.
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    // No shot at this for node-cbor.  For other projects, yes.
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'warn',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'off', // I do this all the time.
    'no-plusplus': 'off', // What?
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off', // Not needed
    'no-restricted-globals': 'off', // Not needed
    'no-restricted-imports': 'off', // Not needed
    'no-restricted-properties': 'off', // Not needed
    'no-restricted-syntax': 'off', // Not needed
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off', // No.
    'no-throw-literal': 'error',
    'no-undef-init': 'off', // Turns out I need this often enough
    'no-undefined': 'off', // No.
    'no-underscore-dangle': 'off', // Maybe one day.
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off', // I like useless constructors
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off', // Only turn this on periodically
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'off', // Not yet
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'radix': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off', // No.
    'require-yield': 'error',
    'sort-imports': 'error',
    'sort-keys': 'off', // Pedantic
    'sort-vars': 'off', // Pedantic
    'spaced-comment': ['error', 'always'],
    'strict': ['error', 'global'],
    'symbol-description': 'error',
    'vars-on-top': 'error',
    'yoda': ['error', 'never', {exceptRange: true}],

    // [Layout & Formatting](https://eslint.org/docs/rules/#layout-formatting)
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    'computed-property-spacing': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': 'off', // Not needed
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off', // I'm all over the place on these
    'linebreak-style': 'error',
    'lines-around-comment': ['error', {
      allowBlockStart: true,
      allowClassStart: true,
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'max-len': ['error', 80, {
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'max-statements-per-line': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-extra-parens': 'off', // Too fiddly to torn off everything.
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'error',
    'quotes': ['error', 'single'],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    'semi-spacing': 'error',
    'semi-style': ['error', 'first'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'off', // No.
    'yield-star-spacing': ['error', 'before'],

    // [Possible Errors](https://github.com/mysticatea/eslint-plugin-node#possible-errors)
    'node/handle-callback-err': ['error', 'er'],
    'node/no-callback-literal': 'error',
    'node/no-exports-assign': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'off', // This one doesn't work yet:
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-exit': 'off', // No.
    'node/no-unpublished-bin': 'error',
    'node/no-unpublished-import': 'off', // Doesn't work
    'node/no-unpublished-require': 'off', // Doesn't work
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'off', // This always seems to be wrong

    // [Best Practices](https://github.com/mysticatea/eslint-plugin-node#best-practices)
    'node/no-deprecated-api': 'error',

    // [Stylistic Issues](https://github.com/mysticatea/eslint-plugin-node#stylistic-issues)
    'node/callback-return': 'off', // No
    'node/exports-style': 'off',
    // Doesn't work for `import 'regenerator-runtime/runtime'`
    'node/file-extension-in-import': 'error',
    'node/global-require': 'off',
    'node/no-mixed-requires': 'error',
    // No
    'node/no-process-env': 'off',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',
    'node/no-sync': 'off',

    'node/prefer-global/buffer': ['error', 'never'],
    // Hopefully only used in tests and cli
    'node/prefer-global/console': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    // Not yet
    'node/prefer-promises/dns': 'off',
    'node/prefer-promises/fs': 'off',
  },
  overrides: [
    {
      files: ['*.mjs'],
      parserOptions: {sourceType: 'module'},
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
