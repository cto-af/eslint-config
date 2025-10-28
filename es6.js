import {defineConfig} from 'eslint/config';
import index from './index.js';
import mod from './module.js';

// Turn on es6 modules
export default defineConfig(
  index,
  mod
);
