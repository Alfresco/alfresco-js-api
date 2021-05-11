#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

./scripts/test-build.sh

#Test Angular build size
cd $DIR/../test/performance/test-angular
npm install
npm run build:prod || exit 1

#Test webpack build size
cd $DIR/../test/performance/test-webpack
npm install

mkdir -p $DIR/../test/performance/test-webpack/node_modules/@alfresco/js-api
cp -R $DIR/../dist/package/* $DIR/../test/performance/test-webpack/node_modules/@alfresco/js-api

npm run build || exit 1
