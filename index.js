const got = require('got');

module.exports = function (source) {
  this.cacheable();

  const callback = this.async();
  const query = this.query.slice(1);
  const vendors = JSON.parse(source);

  got(vendors[query])
    .then(response => {
      callback(null, `module.exports = ${response.body}`);
    });
};
