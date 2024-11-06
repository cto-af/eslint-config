import json from '@eslint/json';
import {rules} from './rules/json.js';

export default [
  {
    plugins: {
      json,
    },
  },
  {
    files: ['**/*.json'],
    language: 'json/json',
    rules,
  },
  {
    files: ['**/*.jsonc', '.vscode/*.json', '**/tsconfig.json'],
    language: 'json/jsonc',
    languageOptions: {
      allowTrailingCommas: true,
    },
    rules,
  },
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    rules,
  },
];
