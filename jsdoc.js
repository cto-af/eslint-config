import jsdoc from 'eslint-plugin-jsdoc';
import {rules} from './rules/jsdoc.js';

export default [{
  files: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.ts',
  ],
  plugins: {
    jsdoc,
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        extends: 'extends',
      },
    },
  },
  rules,
}];
