import json from '@eslint/json';
import rules from './rules/json.js';

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
];
