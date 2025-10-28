import {defineConfig} from 'eslint/config';

export default defineConfig({
  files: [
    '**/*.mjs',
    '**/*.ts',
  ],
  languageOptions: {
    sourceType: 'module',
  },
});
