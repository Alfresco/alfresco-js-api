const _ = require('lodash');
const rollup = require('rollup');
const rollupAlias = require('rollup-plugin-alias');
const rollupInject = require('rollup-plugin-inject');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const compiler = require('@ampproject/rollup-plugin-closure-compiler');
const fs = require('fs');
const tslib = require('tslib');
const path = require('path');

module.exports = function rollupBundle(options) {
    const dest = options.dest;
    const sourcemapFullFile = dest + '.map';

    rollup
        .rollup({
            input: options.input,
            plugins: [
                rollupAlias(options.aliases),
                rollupNodeResolve({
                    jsnext: true
                }),
                rollupInject({
                    exclude: 'node_modules/**',
                    modules: _.mapValues(tslib, function(value, key) {
                        return ['tslib', key];
                    })
                }),
                options.minify ? compiler() : undefined
            ]
        })
        .then(function(bundle) {
            return bundle.generate({
                format: 'umd',
                name: '@alfresco/js-api',
                amd: {
                    id: '@alfresco/js-api'
                },
                sourcemap: true
            });
        })
        .then(function(result) {
            // rollup doesn't add a sourceMappingURL
            // https://github.com/rollup/rollup/issues/121
            result.code =
                result.code +
                '\n//# sourceMappingURL=' +
                path.basename(sourcemapFullFile);

            fs.writeFileSync(dest, result.code);
            fs.writeFileSync(sourcemapFullFile, result.map);
        })
        .catch(function(err) {
            console.error(err);
            process.exit(1);
        });
};
