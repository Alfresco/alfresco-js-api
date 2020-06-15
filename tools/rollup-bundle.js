const _ = require('lodash');
const rollup = require('rollup');
const inject = require('rollup-plugin-inject');
const resolve = require('rollup-plugin-node-resolve');
const tslib = require('tslib');
const { terser } = require('rollup-plugin-terser');

module.exports = async function rollupBundle(options) {
    const { dest, banner } = options;

    const inputOptions = {
        input: options.input,
        plugins: [
            resolve(),
            inject({
                exclude: 'node_modules/**',
                modules: _.mapValues(tslib, function(value, key) {
                    return ['tslib', key];
                })
            }),
            options.minify ? terser({
                output: {
                    comments: /@preserve/
                }
            }) : undefined
        ]
    };

    const outputOptions = {
        format: 'umd',
        name: '@alfresco/js-api',
        banner,
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
