const test = require('ava');
const loader = require('../');

test.cb('should load remote json', t => {
  loader.call({
    cacheable: () => {},
    async: () => (a, pkg) => {
      t.is(pkg.name, 'remote-json-loader');
      t.end();
    },
    query: '?package'
  }, JSON.stringify({
    package: 'https://raw.githubusercontent.com/msn0/remote-json-loader/master/package.json'
  }));
});
