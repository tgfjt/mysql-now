# mysql-now

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]

## Install

`npm install @tgfjt/mysql-now`

## Usage

```js
var now = require('mysql-now')
now(); // 2017-06-14 18:00:00

now(new Date(Date.UTC(2017, 0))); // 2017-01-01 00:00:00
```

[npm-image]: https://img.shields.io/npm/v/@tgfjt/mysql-now.svg
[npm-url]: https://npmjs.org/package/@tgfjt/mysql-now
[travis-image]: https://img.shields.io/travis/tgfjt/mysql-now/master.svg?label=linux
[travis-url]: https://travis-ci.org/tgfjt/mysql-now
