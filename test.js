const test = require('ava');
const loader = require('./');

test.cb('should load remote json', t => {
  loader.call({
    cacheable: () => {
    },
    async: () => (a, Cow) => {
      t.is(Cow[0].Barcode, '8077676562');
      t.end();
    },
    query: '?CowInCar'
  }, JSON.stringify({CowInCar: 'http://barcodefinder.com/search?q=8077676562&format=json'}));
});
