const test = require('ava');
const loader = require('../');
const requireFromString = require('require-from-string');

test.cb('should load remote json', t => {
  loader.call({
    cacheable: () => {},
    async: () => (a, response) => {
      const pkg = requireFromString(response);
      t.is(pkg.name, 'remote-json-loader');
      t.end();
    },
    query: '?package'
  }, JSON.stringify({
    package: 'https://raw.githubusercontent.com/msn0/remote-json-loader/master/package.json'
  }));
});
