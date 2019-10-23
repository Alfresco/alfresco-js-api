const _ = require('lodash');
const rollup = require('rollup');
const alias = require('rollup-plugin-alias');
const inject = require('rollup-plugin-inject');
const resolve = require('rollup-plugin-node-resolve');
const compiler = require('@ampproject/rollup-plugin-closure-compiler');
const tslib = require('tslib');

module.exports = async function rollupBundle(options) {
    const dest = options.dest;

    const inputOptions = {
        input: options.input,
        plugins: [
            alias(options.aliases),
            resolve(),
            inject({
                exclude: 'node_modules/**',
                modules: _.mapValues(tslib, function(value, key) {
                    return ['tslib', key];
                })
            }),
            options.minify ? compiler() : undefined
        ]
    };

    const outputOptions = {
        format: 'umd',
        name: '@alfresco/js-api',
        file: dest,
        amd: {
            id: '@alfresco/js-api'
        },
        sourcemap: true,
        sourcemapFile: `${dest}.map`
    }

    try {
        const bundle = await rollup.rollup(inputOptions);
        await bundle.write(outputOptions);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
