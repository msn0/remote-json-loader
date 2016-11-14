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
  "package.json": "https://raw.githubusercontent.com/msn0/remote-json-loader/master/package.json"
}
```

```js
import config from 'remote-json?app-config!./config.json';
```

## License

MIT © [Michał Jezierski](https://github.com/msn0)
