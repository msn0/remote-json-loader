const got = require('got');

function requireFromString(src, filename) {
  var Module = module.constructor;
  var m = new Module();
  m._compile(src, filename);
  return m.exports;
}

module.exports = function(source) {
    this.cacheable();
    var callback = this.async();
    var query = this.query.slice(1);
    var vendors = JSON.parse(source);
    var that = this;
    got(vendors[query])
        .then(response => {

            console.log(requireFromString('module.exports = { test: 1}'));

            // console.log(eval('module.exports = ' + response.body + ';'));
            callback(null, 'module.exports = ' + response.body + ';');
        });
};
