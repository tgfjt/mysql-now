# mysql-now

[![build status][travis-image]][travis-url]

## Usage

```js
var now = require('mysql-now')
now(); // 2017-06-14 18:00:00

now(new Date(Date.UTC(2017, 0))); // 2017-01-01 00:00:00
```