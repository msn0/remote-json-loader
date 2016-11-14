# remote json loader for webpack [![Build Status](https://travis-ci.org/msn0/remote-json-loader.svg?branch=master)](http://travis-ci.org/msn0/remote-json-loader)

## Installation

```sh
npm i remote-json-loader --save-dev
```

## Usage

```json
// config.json
{
  "app-config": "http://my-website.ninja/config.json",
  "ui-config": "http://my-website.ninja/interface-config.json",
  "package": "https://raw.githubusercontent.com/msn0/remote-json-loader/master/package.json",
  "whatever": "https://my-website.ninja/whatever.json"
}
```

```js
import pkg from 'remote-json?package!./config.json';
// or
const pkg = require('remote-json?package!./config.json'); 

console.log(pkg.name); // → remote-json-loader
```

## License

MIT © [Michał Jezierski](https://github.com/msn0)
