'use strict'

module.exports = {
  env: {
    node: true,
    es6: true,
    es2020: true,
  },
  plugins: [
    'jsdoc',
    'node',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  reportUnusedDisableDirectives: true,
  settings: {
    jsdoc: {
      tagNamePreference: {
        extends: 'extends',
      },
    },
  },
  rules: {
    // Last updated 2021-08-03, v7.32.0

    // [Possible Errors](https://eslint.org/docs/rules/#possible-errors)
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    // I disagree with this one.  Use lots of parens to make things clear.
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-useless-backreference': 'error',
    'node/handle-callback-err': ['error', 'er'],
    'node/no-callback-literal': 'error',
    'node/no-exports-assign': 'error',
    'node/no-extraneous-import': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-import': 'error',
    // This one doesn't work yet:
    'node/no-missing-require': 'off',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    // No.
    // node/no-process-exit
    'node/no-unpublished-bin': 'error',
    // Doesn't work:
    // 'node/no-unpublished-import': 'error',
    // 'node/no-unpublished-require': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/shebang': 'warn',

    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],

    // [Best Practices](https://eslint.org/docs/rules/#best-practices)
    'accessor-pairs': 'error',
    'array-callback-return': ['error', {allowImplicit: true}],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'warn',
    // This one is pedantic even for me.
    complexity: 'off',
    'consistent-return': 'error',
    curly: ['error', 'multi-line'],
    // I use exhastive cases a lot, which makes the default unreachable
    'default-case': 'off',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', {null: 'ignore'}],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    // I disagree with this one.
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // No shot at this for node-cbor.  For other projects, yes.
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'warn',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'warn',
    // I do this all the time.
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    // Only turn this on periodically
    'no-warning-comments': 'off',
    'no-with': 'error',
    'node/no-deprecated-api': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'error',
    radix: 'error',
    'require-await': 'error',
    // No.
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: ['error', 'never', {exceptRange: true}],

    // [Strict Mode](https://eslint.org/docs/rules/#strict-mode)
    strict: ['error', 'global'],

    // [Variables](https://eslint.org/docs/rules/#variables)
    'init-declarations': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'off', // Turns out I need this often enough
    // No.
    'no-undefined': 'off',
    'no-unused-vars': [
      'error', {
        args: 'none',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^ignore',
      },
    ],
    'no-use-before-define': 'error',

    // [Stylistic Issues](https://eslint.org/docs/rules/#stylistic-issues)
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    // If I had started with this, maybe
    camelcase: 'off',
    'capitalized-comments': ['error', 'always', {
      ignoreConsecutiveComments: true,
      ignorePattern: 'c8',
    }],
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
    // Not needed anymore with =>
    'consistent-this': 'off',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    // Not needed
    // id-denylist
    // id-length
    // id-match
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: ['error', 2, {SwitchCase: 1}],

    'jsdoc/require-jsdoc': ['error', {
      publicOnly: {ancestorsOnly: true},
    }],

    // Not needed
    // jsx-quotes
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    // I'm all over the place on these
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': ['error', {
      allowBlockStart: true,
      allowClassStart: true,
    }],
    'lines-between-class-members': 'error',
    // No.
    'max-depth': 'off',
    'max-len': ['error', 80, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    // No.
    // max-lines
    // max-lines-per-function
    // max-nested-callbacks
    'max-params': ['error', 4],
    // No.
    // max-statements
    // max-statements-per-line
    'multiline-comment-style': ['error', 'separate-lines'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    // Lol.  Not in these projects
    // no-bitwise
    // no-continue
    // no-inline-comments
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    // What?
    // no-plusplus
    // no-restricted-syntax
    'no-tabs': 'error',
    // No.
    // no-ternary
    'no-trailing-spaces': 'error',
    // 'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    // No
    'node/callback-return': 'off',
    'node/exports-style': 'off',
    // Doesn't work for `import 'regenerator-runtime/runtime'`
    'node/file-extension-in-import': 'off',
    'node/global-require': 'off',
    'node/no-mixed-requires': 'error',
    // No
    // node/no-process-env
    // node/no-restricted-import
    // node/no-restricted-require
    // node/no-sync
    'node/prefer-global/buffer': ['error', 'never'],
    // Hopefully only used in tests and cli
    // node/prefer-global/console
    // node/prefer-global/process
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    // Not yet
    // node/prefer-promises/dns
    // node/prefer-promises/fs

    'nonblock-statement-body-position': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'semi-spacing': 'error',
    'semi-style': ['error', 'first'],
    // Pedantic
    // sort-keys
    // sort-vars
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    // No.
    // wrap-regex

    // [ECMAScript 6](https://eslint.org/docs/rules/#ecmascript-6)
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    // Not needed
    // no-restricted-exports
    // no-restricted-imports
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    // I like useless constructors
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'before'],

    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    // https://github.com/eslint/eslint/issues/14745
    'jsdoc/check-examples': 'off',
    // Track https://github.com/gajus/eslint-plugin-jsdoc/issues/715
    // 'jsdoc/check-indentation': 'error',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': 'error',
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/no-defaults': 'off',
    'jsdoc/no-missing-syntax': 'off',
    'jsdoc/no-multi-asterisks': 'error',
    'jsdoc/no-restricted-syntax': 'off',
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'error',
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
    'jsdoc/tag-lines': 'error',
    'jsdoc/valid-types': 'error',
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
