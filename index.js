const denodeify = require ('./denodeify');

/**
 * Expose `plugin()`.
 */

module.exports = plugin;

/**
 * Methods for patch.
 */

var dbMethods = [
  'drop',
  'close'
];

var storeMethods = [
  'put',
  'get', 
  'del',
  'count',
  'clear',
  'batch',
  'all'
];

var indexMethods = [
  'get',
  'count'
];

/**
 * Denodeify each db's method and add promises support with
 * https://github.com/jakearchibald/es6-promise
 */

function plugin() {

  return function(db) {
    patch(db, dbMethods);

    Object.keys(db.stores).forEach(function(storeName) {
      var store = db.store(storeName);
      patch(store, storeMethods);

      Object.keys(store.indexes).forEach(function(indexName) {
        var index = store.index(indexName);
        patch(index, indexMethods);
      });
    });
  };
}


/**
 * Patch `methods` from `object` with `denodeify`.
 *
 * @param {Object} object
 * @param {Array} methods
 */

function patch(object, methods) {
  methods.forEach(function(m) {
    // object[m] = promiseWrap(object, m, promiseInstance)
    object[m] = denodeify(object[m])
  });
}