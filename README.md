# is-same-guy

```
Checks if identities are same
```

## Install

```js
npm install --save is-same-guy
```

## Example

```js
const isSameGuy = require("is-same-guy");

const score = isSameGuy(
  ["test message", "test message too"],
  ["second chat message", "test message"]
);
```

Returns probability (`0 <= probability <= 1`)

## Test

```bash
npm test
```
