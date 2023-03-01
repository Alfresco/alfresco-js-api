"use strict";

const pkg = require('./package.json');
const fs = require('node:fs');

const OUTPUT_FOLDER = 'dist';

delete pkg.scripts;
delete pkg.devDependencies;
delete pkg.bundlesize;
delete pkg.nyc;

const rootPackageJson = {
    ...pkg,
    name: '@alfresco/js-api',
    main: './index.js',
    typings: './typings/index.d.ts',
    module: './esm5/index.js',
    es2015: './esm2015/index.js'
};

fs.copyFileSync('./LICENSE.txt', `${OUTPUT_FOLDER}/LICENSE.txt`);
fs.copyFileSync('./README.md', `${OUTPUT_FOLDER}/README.md`);

fs.writeFileSync(`${OUTPUT_FOLDER}/package.json`, JSON.stringify(rootPackageJson, null, 2));


