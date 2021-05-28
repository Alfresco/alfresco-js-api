"use strict";

const pkg = require('./package.json');
const fs = require('fs-extra');
const mkdirp = require('mkdirp');
const { copySources, cleanSourceMapRoot } = require('./.make-helpers');

const ROOT = 'dist';
const CJS_ROOT = `${ROOT}/cjs`;
const ESM5_ROOT = `${ROOT}/esm5`;
const ESM2015_ROOT = `${ROOT}/esm2015`;
const TYPE_ROOT = `${ROOT}/typings`;
const PKG_ROOT = `${ROOT}/package`;
const CJS_PKG = PKG_ROOT;
const ESM5_PKG = `${PKG_ROOT}/esm5`;
const ESM2015_PKG = `${PKG_ROOT}/esm2015`;
const SRC_ROOT_PKG = `${PKG_ROOT}/src`;
const TYPE_PKG = `${PKG_ROOT}/typings`;

delete pkg.scripts;
delete pkg.devDependencies;
delete pkg.bundlesize;
delete pkg.nyc;

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
cleanSourceMapRoot(PKG_ROOT, SRC_ROOT_PKG);

fs.copySync(TYPE_ROOT, TYPE_PKG);

copySources(ESM5_ROOT, ESM5_PKG, true);
cleanSourceMapRoot(ESM5_PKG, SRC_ROOT_PKG);

copySources(ESM2015_ROOT, ESM2015_PKG, true);
cleanSourceMapRoot(ESM2015_PKG, SRC_ROOT_PKG);

fs.copySync('./tsconfig.base.json', `${PKG_ROOT}/src/tsconfig.json`);
fs.writeJsonSync(`${PKG_ROOT}/package.json`, rootPackageJson, {spaces: 2});
