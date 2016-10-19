# remote-loader

> Load remote resources with webpack

## Installation

```sh
npm i remote-loader --save-dev
```

## Usage

```js
import $ from 'remote?jquery!./vendors.json';
import React from 'remote?react!./vendors.json';
import Google from 'remote?google!./vendors.json';
import Config from 'remote?myConfig!./vendors.json';

// vendors.js
{
  "jquery":  "https://code.jquery.com/jquery-3.1.1.min.js",
  "react": "https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react.js",
  "google": "https://google.com",
  "myConfig": "http://my-website.ninja/config.json"
}
```

## License

MIT © [Michał Jezierski](https://github.com/msn0)
