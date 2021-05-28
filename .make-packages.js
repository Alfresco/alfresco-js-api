"use strict";

const pkg = require('./package.json');
const fs = require('fs-extra');

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

fs.copySync('./LICENSE.txt', `${OUTPUT_FOLDER}/LICENSE.txt`);
fs.copySync('./README.md', `${OUTPUT_FOLDER}/README.md`);

fs.writeJsonSync(`${OUTPUT_FOLDER}/package.json`, rootPackageJson, {spaces: 2});


