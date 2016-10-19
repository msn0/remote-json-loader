const got = require('got');

module.exports = function(source) {
    this.cacheable();
    var callback = this.async();
    var query = this.query.slice(1);
    var vendors = JSON.parse(source);

    got(vendors[query])
        .then(response => {
            callback(null, 'module.exports = ' + JSON.stringify(response.body) + ';');
        });
};
