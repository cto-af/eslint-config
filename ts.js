import {rules} from './rules/ts.js';
import tslint from 'typescript-eslint';

const blob = {
  files: ['**/*.ts'],
  ignores: [
    'coverage/**',
    'node_modules/**',
    'docs/**',
  ],
  ...tslint.configs.base,
  rules,
};

blob.languageOptions.parserOptions = {
  // It's undefined for now, but just in case.
  ...blob.languageOptions.parserOptions,
  project: true,
};

export default [blob];
