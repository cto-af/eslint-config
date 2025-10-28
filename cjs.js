import {defineConfig} from 'eslint/config';

export default defineConfig({
  files: [
    '**/*.cjs',
  ],
  languageOptions: {
    sourceType: 'commonjs',
  },
});
