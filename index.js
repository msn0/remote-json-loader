const got = require('got');

function requireFromString(src, filename) {
  const Module = module.constructor;
  const m = new Module();
  m._compile(src, filename);
  return m.exports;
}

module.exports = function (source) {
  this.cacheable();

  const callback = this.async();
  const query = this.query.slice(1);
  const vendors = JSON.parse(source);

  got(vendors[query])
    .then(response => {
      console.log(requireFromString('module.exports = { test: 1}'));
      // console.log(eval('module.exports = ' + response.body + ';'));
      callback(null, 'module.exports = ' + response.body + ';');
    });
};
