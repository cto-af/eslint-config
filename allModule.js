import all from './all.js';
import {defineConfig} from 'eslint/config';
import mod from './module.js';

export default defineConfig(
  all,
  mod
);
