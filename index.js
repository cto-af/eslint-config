import {defineConfig} from 'eslint/config';
import ignores from './ignores.js';
import js from './js.js';
import json from './json.js';
import mjs from './mjs.js';

// Just the core rules, no optional dependencies needed.
export default defineConfig(
  ignores,
  js,
  mjs,
  json
);
