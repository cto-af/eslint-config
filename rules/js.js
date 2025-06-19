export const rules = {
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
  'no-obj-calls': 'error',
  'no-promise-executor-return': 'error',
  'no-prototype-builtins': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-setter-return': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-this-before-super': 'error',
  'no-unassigned-vars': 'error',
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
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^(_|ignore)',
      varsIgnorePattern: '^_[^_]',
      reportUsedIgnorePattern: true,
    },
  ],
  'no-use-before-define': 'error',
  // Doesn't account for try blocks
  // See https://github.com/eslint/eslint/issues/17579
  'no-useless-assignment': 'off',
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
  'logical-assignment-operators': 'off', // No.
  'max-classes-per-file': 'off', // No.
  'max-depth': 'off', // No.
  'max-lines': 'off', // No.
  'max-lines-per-function': 'off', // No.
  'max-nested-callbacks': 'off', // No.
  'max-params': ['error', 4],
  'max-statements': 'off', // No.
  'new-cap': 'error',
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'off', // Lol.  Not in these projects
  'no-caller': 'error',
  'no-case-declarations': 'error',
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
  'no-magic-numbers': 'off', // No shot at this for node-cbor.  For other projects, yes.
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'warn',
  'no-nonoctal-decimal-escape': 'error',
  'no-object-constructor': 'error',
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
  'radix': 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'off', // No.
  'require-yield': 'error',
  'sort-imports': 'error',
  'sort-keys': 'off', // Pedantic
  'sort-vars': 'off', // Pedantic
  'strict': ['error', 'global'],
  'symbol-description': 'error',
  'unicode-bom': 'error',
  'vars-on-top': 'error',
  'yoda': ['error', 'never', {exceptRange: true}],

  // [Stylistc](https://eslint.style/packages/default)
  '@stylistic/array-bracket-newline': ['error', 'consistent'],
  '@stylistic/array-bracket-spacing': ['error', 'never'],
  '@stylistic/array-element-newline': ['error', 'consistent'],
  '@stylistic/arrow-parens': ['error', 'as-needed'],
  '@stylistic/arrow-spacing': 'error',
  '@stylistic/block-spacing': ['error', 'always'],
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'never',
    enums: 'always-multiline',
    tuples: 'always-multiline',
  }],
  '@stylistic/comma-spacing': 'error',
  '@stylistic/comma-style': ['error', 'last'],
  '@stylistic/computed-property-spacing': 'error',
  '@stylistic/curly-newline': 'off', // Too much config
  '@stylistic/dot-location': ['error', 'property'],
  '@stylistic/eol-last': 'error',
  '@stylistic/func-call-spacing': 'off', // Renamed
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],
  '@stylistic/function-call-spacing': 'error',
  '@stylistic/function-paren-newline': ['error', 'consistent'],
  '@stylistic/generator-star-spacing': 'error',
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  '@stylistic/indent': ['error', 2, {SwitchCase: 1}],
  '@stylistic/indent-binary-ops': 'off', // Not good enough

  '@stylistic/jsx-child-element-spacing': 'off', // Not needed
  '@stylistic/jsx-closing-bracket-location': 'off', // Not needed
  '@stylistic/jsx-closing-tag-location': 'off', // Not needed
  '@stylistic/jsx-curly-brace-presence': 'off', // Not needed
  '@stylistic/jsx-curly-newline': 'off', // Not needed
  '@stylistic/jsx-curly-spacing': 'off', // Not needed
  '@stylistic/jsx-equals-spacing': 'off', // Not needed
  '@stylistic/jsx-first-prop-new-line': 'off', // Not needed
  '@stylistic/jsx-function-call-newline': 'off', // Not needed
  '@stylistic/jsx-indent-props': 'off', // Not needed
  '@stylistic/jsx-max-props-per-line': 'off', // Not needed
  '@stylistic/jsx-newline': 'off', // Not needed
  '@stylistic/jsx-one-expression-per-line': 'off', // Not needed
  '@stylistic/jsx-pascal-case': 'off', // Not needed
  '@stylistic/jsx-props-no-multi-spaces': 'off', // Not needed
  '@stylistic/jsx-quotes': 'off', // Not needed
  '@stylistic/jsx-self-closing-comp': 'off', // Not needed
  '@stylistic/jsx-sort-props': 'off', // Not needed
  '@stylistic/jsx-tag-spacing': 'off', // Not needed
  '@stylistic/jsx-wrap-multilines': 'off', // Not needed

  '@stylistic/key-spacing': 'error',
  '@stylistic/keyword-spacing': 'error',
  '@stylistic/line-comment-position': 'off', // Too hard to change
  '@stylistic/linebreak-style': 'error',
  '@stylistic/lines-around-comment': ['error', {
    allowArrayStart: true,
    allowBlockStart: true,
    allowClassStart: true,
    allowEnumStart: true,
    allowInterfaceStart: true,
    allowObjectStart: true,
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
  '@stylistic/member-delimiter-style': 'off',
  '@stylistic/multiline-comment-style': 'off', // Not important
  '@stylistic/multiline-ternary': ['error', 'always-multiline'],
  '@stylistic/new-parens': 'error',
  '@stylistic/newline-per-chained-call': 'error',
  '@stylistic/no-confusing-arrow': 'error',
  '@stylistic/no-extra-parens': 'off', // Too fiddly to torn off everything.
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
  '@stylistic/type-annotation-spacing': 'off', // Not TS.
  '@stylistic/type-generic-spacing': 'off', // Not TS.
  '@stylistic/type-named-tuple-spacing': 'off', // Not TS.
  '@stylistic/wrap-iife': 'error',
  '@stylistic/wrap-regex': 'off', // No.
  '@stylistic/yield-star-spacing': ['error', 'before'],

  // [Possible Errors](https://github.com/eslint-community/eslint-plugin-n#possible-errors)
  'n/handle-callback-err': ['error', 'er'],
  'n/no-callback-literal': 'error',
  'n/no-exports-assign': 'error',
  'n/no-extraneous-import': 'error',
  'n/no-extraneous-require': 'error',
  'n/no-missing-import': ['error', {
    allowModules: ['ava'], // Ava uses fancy new stuff, so shows up unavailable.
  }],
  'n/no-missing-require': 'off', // This one doesn't work yet:
  'n/no-new-require': 'error',
  'n/no-path-concat': 'error',
  'n/no-process-exit': 'off', // No.
  'n/no-top-level-await': 'error', // My plan: doc all of these.
  'n/no-unpublished-bin': 'error',
  'n/no-unpublished-import': 'off', // Doesn't work
  'n/no-unpublished-require': 'off', // Doesn't work
  'n/no-unsupported-features/es-builtins': 'error',
  'n/no-unsupported-features/es-syntax': 'error',
  'n/no-unsupported-features/node-builtins': ['error', {
    allowExperimental: true,
  }],
  'n/process-exit-as-throw': 'error',

  // [Best Practices](https://github.com/eslint-community/eslint-plugin-n#best-practices)
  'n/no-deprecated-api': 'error',

  // [Stylistic Issues](https://github.com/eslint-community/eslint-plugin-n#stylistic-issues)
  'n/callback-return': 'off', // No
  'n/exports-style': 'off',
  // Doesn't work for `import 'regenerator-runtime/runtime'`
  'n/file-extension-in-import': 'error',
  'n/global-require': 'off',
  'n/hashbang': 'off', // Try turning this on sometime
  'n/no-mixed-requires': 'error',
  'n/no-process-env': 'off', // No
  'n/no-restricted-import': 'off',
  'n/no-restricted-require': 'off',
  'n/no-sync': 'off',
  'n/prefer-global/buffer': ['error', 'never'],
  'n/prefer-global/console': 'off', // Hopefully only used in tests and cli
  'n/prefer-global/process': 'off',
  'n/prefer-global/text-decoder': ['error', 'always'],
  'n/prefer-global/text-encoder': ['error', 'always'],
  'n/prefer-global/url': ['error', 'always'],
  'n/prefer-global/url-search-params': ['error', 'always'],
  'n/prefer-node-protocol': 'error', // Turn off when needed
  // Not yet
  'n/prefer-promises/dns': 'off',
  'n/prefer-promises/fs': 'off',

  // [ReDoS](https://makenowjust-labs.github.io/recheck/docs/usage/as-eslint-plugin/)
  'redos/no-vulnerable': 'error',
};
