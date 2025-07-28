# @cto-af/eslint-config

EsLint rules for [cto.af](https://cto.af) projects, using ESLint flat configs.

## Install

```sh
npm install -D eslint @cto-af/eslint-config
```

Optionally:
```sh
npm install -D typescript-eslint typescript eslint-plugin-ava eslint-plugin-jsdoc eslint-plugin-markdown
```

## CommonJS project:

eslint.config.js

```cjs
module.exports = require('@cto.af/eslint-config');
```

## ES6 project:

eslint.config.js

```mjs
import es6 from '@cto.af/eslint-config/es6.js';

export default es6;
```

## TS Project:

Run:

`npm install -D typescript-eslint`

Then in eslint.config.js:

```mjs
import es6 from '@cto.af/eslint-config/es6.js';
import ts from '@cto.af/eslint-config/ts.js';

export default [
  ...es6,
  ...ts,
];
```

## Turn on everything:


Run:

`npm install -D typescript-eslint eslint-plugin-ava eslint-plugin-jsdoc @eslint/markdown`

eslint.config.js:

```mjs
import all from '@cto.af/eslint-config/all.js';
import mod from '@cto.af/eslint-config/module.js';

export default [
  ...all,
  ...mod,
];
```
