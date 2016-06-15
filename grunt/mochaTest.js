'use strict';
/**
 * @see https://github.com/pghalliday/grunt-mocha-test
 */
module.exports = function() {
  return {
    test: {
      src: ['test/**/*.js'],
      options: {
        require: ['chai','node_modules/sinon/lib/sinon','node_modules/sinon-chai/lib/sinon-chai'],
        clearRequireCache: true,
        log: true,
        logErrors: true
      }
    }
  };
};
