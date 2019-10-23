const fs = require('fs');
const path = require('path');
const rollupBundle = require('./rollup-bundle');

const banner = fs.readFileSync(
    path.join(__dirname, 'license-header.txt')
).toString();

rollupBundle({
    input: 'dist/esm5_for_rollup/src/internal/umd.js',
    dest: 'dist/global/alfresco-js-api.umd.js',
    banner
});

rollupBundle({
    input: 'dist/esm5_for_rollup/src/internal/umd.js',
    dest: 'dist/global/alfresco-js-api.umd.min.js',
    minify: true,
    banner
});
