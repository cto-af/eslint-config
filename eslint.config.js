import all from './all.js';
import ava from 'eslint-plugin-ava';
import jsdoc from 'eslint-plugin-jsdoc';
import json from '@eslint/json';
import meta from '@cto.af/eslint-plugin-meta';
import mod from './module.js';
import n from 'eslint-plugin-n';
import {default as ourJson} from './json.js';
import {plugin} from 'typescript-eslint';
import redos from 'eslint-plugin-redos';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    ignores: [
      'test/**',
    ],
  },
  ...all,
  ...ourJson,
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
          redos,
          '@stylistic': stylistic,
          '@typescript-eslint': plugin,
        },
      },
    },
    ...meta.configs.all,
  },
];
