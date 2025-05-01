import markdown from '@eslint/markdown';

export default [
  {
    files: [
      '**/*.md',
    ],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
  {
    files: [
      '**/*.md/**',
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {impliedStrict: true},
      },
    },
    rules: {
      'eol-last': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'padded-blocks': 'off',
      'strict': 'off',
      'unicode-bom': 'off',
      'no-console': 'off',
      'n/no-missing-import': 'off',
    },
  },
];
