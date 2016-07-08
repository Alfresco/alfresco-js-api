'use strict';
/**
 * @see https://github.com/nickmerwin/node-coveralls
 */
module.exports = function() {
    return {
        options: {
            src: 'coverage/lcov.info',
            force: false
        },
        default: {
            src: 'coverage/lcov.info'
        }
    };
};
