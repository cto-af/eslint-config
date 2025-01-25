import globals from 'globals';
import n from 'eslint-plugin-n';
import redos from 'eslint-plugin-redos';
import {rules} from './rules/js.js';
import stylistic from '@stylistic/eslint-plugin';

export default [{
  files: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.ts',
  ],
  plugins: {
    '@stylistic': stylistic,
    n,
    redos,
  },
  languageOptions: {
    ecmaVersion: 2022,
    globals: globals.node,
    sourceType: 'commonjs',
  },
  linterOptions: {
    noInlineConfig: false,
    reportUnusedDisableDirectives: 'error',
    reportUnusedInlineConfigs: 'error',
  },
  rules,
}];
