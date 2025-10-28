import ava from 'eslint-plugin-ava';
import {defineConfig} from 'eslint/config';
import n from 'eslint-plugin-n';
import {rules} from './rules/ava.js';

export default defineConfig({
  files: [
    '**/test/**.test.*',
    '**/test/**.ava.*',
    '**/test/**.spec.*',
    '**/ava/**.test.*',
    '**/ava/**.ava.*',
    '**/ava/**.spec.*',
  ],
  plugins: {
    ava,
    n,
  },
  rules,
});
