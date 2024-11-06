import ava from './ava.js';
import cjs from './cjs.js';
import ignores from './ignores.js';
import js from './js.js';
import jsdoc from './jsdoc.js';
import jsdoc_ts from './jsdoc_ts.js';
import json from './json.js';
import markdown from './markdown.js';
import mjs from './mjs.js';
import ts from './ts.js';

// Turn on everything.  Requires all of the optional dependencies.
export default [
  ...ignores,
  ...js,
  ...mjs,
  ...cjs,
  ...ts,
  ...jsdoc,
  ...jsdoc_ts,
  ...json,
  ...ava,
  ...markdown,
];
