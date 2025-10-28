import {defineConfig} from 'eslint/config';
import markdown from '@eslint/markdown';
import {rules} from './rules/markdown.js';

export default defineConfig(
  {
    files: [
      '**/*.md',
    ],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
    rules,
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
      'n/no-top-level-await': 'off',
    },
  }
);
