import {defineConfig} from 'eslint/config';

export default defineConfig({
  files: [
    '**/*.ts',
  ],
  rules: {
    'jsdoc/no-types': 'error', // Type info comes from TS
    'jsdoc/no-undefined-types': 'off', // Switch to typedoc
    'jsdoc/require-next-type': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-property-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-returns': ['error', {
      checkConstructors: false,
      checkGetters: false,
      forceRequireReturn: false,
      forceReturnsWithAsync: false,
      publicOnly: true,
    }],
    'jsdoc/require-template': 'off',
    'jsdoc/require-throws-type': 'off',
    'jsdoc/require-yields-type': 'off',
  },
});
