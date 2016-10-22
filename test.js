const test = require('ava');
const loader = require('./');

test.cb('should load json resource', t => {
  loader.call({
    cacheable: () => {},
    async: () => {
      return function (a, Cow) {
        t.is(Cow[0].Barcode, '8077676562');
        t.end();
      };
    },
    query: '?CowInCar'
  }, JSON.stringify({CowInCar: 'http://barcodefinder.com/search?q=8077676562&format=json'}));
});

test.cb('should load module resource', t => {
  loader.call({
    cacheable: () => {},
    async: () => {
      return function (a, ReactDOM) {
        console.log(ReactDOM);
        t.end();
      };
    },
    query: '?react-dom-server'
  }, JSON.stringify({'react-dom-server': 'https://cdnjs.cloudflare.com/ajax/libs/react/15.3.2/react-dom-server.js'}));
});
