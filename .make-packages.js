"use strict";

const pkg = require('./package.json');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');

const ROOT = 'dist';
const CJS_ROOT = `${ROOT}/cjs`;
const ESM5_ROOT = `${ROOT}/esm5`;
const ESM2015_ROOT = `${ROOT}/esm2015`;
const TYPE_ROOT = `${ROOT}/typings`;
const PKG_ROOT = `${ROOT}/package`;
const CJS_PKG = PKG_ROOT;
const ESM5_PKG = `${PKG_ROOT}/esm5`;
const ESM2015_PKG = `${PKG_ROOT}/esm2015`;
const TYPE_PKG = `${PKG_ROOT}/typings`;

delete pkg.scripts;
delete pkg.devDependencies;
delete pkg.bundlesize;
delete pkg.nyc;

function copySources(rootDir, packageDir, ignoreMissing) {
    // If we are ignoring missing directories, early return when source doesn't exist
    if (!fs.existsSync(rootDir)) {
        if (ignoreMissing) {
            return;
        } else {
            throw "Source root dir does not exist!";
        }
    }
    fs.copySync(rootDir, packageDir);
}

fs.removeSync(PKG_ROOT);

const rootPackageJson = {
    ...pkg,
    name: '@alfresco/js-api',
    main: './index.js',
    typings: './typings/index.d.ts',
    module: './esm5/index.js',
    es2015: './esm2015/index.js'
};

mkdirp.sync(PKG_ROOT);

copySources(CJS_ROOT, CJS_PKG);
fs.copySync(TYPE_ROOT, TYPE_PKG);
copySources(ESM5_ROOT, ESM5_PKG, true);
copySources(ESM2015_ROOT, ESM2015_PKG, true);

fs.copySync('./LICENSE.txt', `${PKG_ROOT}/LICENSE.txt`);
fs.copySync('./README.md', `${PKG_ROOT}/README.md`);

fs.writeJsonSync(`${PKG_ROOT}/package.json`, rootPackageJson, {spaces: 2});


