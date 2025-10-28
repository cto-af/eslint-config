import all from '@cto.af/eslint-config/all.js';
import {defineConfig} from 'eslint/config';
import mod from '@cto.af/eslint-config/module.js';
import ts from '@cto.af/eslint-config/ts.js';

export default defineConfig(
  all,
  mod,
  ts
);
