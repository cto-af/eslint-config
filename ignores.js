import {globalIgnores} from 'eslint/config';

export default globalIgnores([
  '**/*.d.ts',
  '**/coverage/**',
  '**/node_modules/**',
  '**/docs/**',
]);
