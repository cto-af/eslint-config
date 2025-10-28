import {defineConfig} from 'eslint/config';

export default defineConfig({
  files: [
    '**/*.ts',
  ],
  rules: {
    'jsdoc/no-undefined-types': 'off', // Switch to typedoc
    'jsdoc/require-param-type': 'off', // Not needed in TS
    'jsdoc/require-returns-type': 'off', // Not needed in TS
  },
});
