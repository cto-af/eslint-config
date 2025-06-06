import ava from 'eslint-plugin-ava';
import n from 'eslint-plugin-n';
import {rules} from './rules/ava.js';

export default [{
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
}];
