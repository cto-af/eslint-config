import all from './all.js';
import ava from 'eslint-plugin-ava';
import jsdoc from 'eslint-plugin-jsdoc';
import json from '@eslint/json';
import meta from '@cto.af/eslint-plugin-meta';
import mod from './module.js';
import n from 'eslint-plugin-n';
import {plugin} from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    ignores: [
      'test/**',
    ],
  },
  ...all,
  ...mod,
  {
    files: [
      'rules/*.js',
    ],
    settings: {
      meta: {
        libs: {
          ava,
          jsdoc,
          json,
          n,
          '@stylistic': stylistic,
          '@typescript-eslint': plugin,
        },
      },
    },
    ...meta.configs.all,
  },
];
