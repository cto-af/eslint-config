import {defineConfig} from 'eslint/config';
import ignores from './ignores.js';
import {rules} from './rules/ts.js';
import tslint from 'typescript-eslint';

const blob = {
  files: ['**/*.ts'],
  settings: {
    n: {
      // Ensure that importing real .js files works
      typescriptExtensionMap: [
        ['', '.js'],
        ['.js', '.js'],
        ['.ts', '.js'],
        ['.cts', '.cjs'],
        ['.mts', '.mjs'],
        ['.tsx', '.js'],
      ],
    },
  },
  ...tslint.configs.base,
  rules,
};

// @ts-expect-error TODO(hildjj): fix types
blob.languageOptions.parserOptions = {
  // It's undefined for now, but just in case.
  // @ts-expect-error TODO(hildjj): fix types
  ...blob.languageOptions.parserOptions,
  project: true,
};

// Allow importing .ts files directly in tests, for now.
const testBlob = {...blob};
testBlob.files = ['**/test/**/*.ts'];
testBlob.settings = {
  n: {
    // Ensure that importing real .js files works
    typescriptExtensionMap: [
      ['', '.js'],
      ['.js', '.js'],
      ['.ts', '.ts'],
      ['.cts', '.cjs'],
      ['.mts', '.mjs'],
      ['.tsx', '.js'],
    ],
  },
};

export default defineConfig(
  ignores,
  blob,
  testBlob
);
