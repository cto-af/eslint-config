# @cto-af/eslint-config

EsLint rules for [cto.af](https://cto.af) projects.

## Install

```sh
npm install -D eslint @cto-af/eslint-config
```

## CommonJS project:

.eslintrc.js
```js
'use strict';

module.exports = {
  root: true,
  extends: ['@cto.af'],
};
```

## ES6 project:

.eslintrc.cjs
```js
'use strict';

module.exports = {
  root: true,
  extends: ['@cto.af/eslint-config/modules'],
};
```

## TS Project:

install:
```sh
npm install -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

.eslintrc.cjs
```js
module.exports = {
  extends: '@cto.af/eslint-config/modules'
}
```
