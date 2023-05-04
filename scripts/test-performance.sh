#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

npm run build

# Test Angular build size

cd $DIR/../test/performance/angular-app
npm install && \

mkdir -p $DIR/../test/performance/angular-app/node_modules/@alfresco/js-api && \
cp -R $DIR/../dist/* $DIR/../test/performance/angular-app/node_modules/@alfresco/js-api && \

npm run build:prod || exit 1

# Test webpack build size

cd $DIR/../test/performance/test-webpack
npm install && \

mkdir -p $DIR/../test/performance/test-webpack/node_modules/@alfresco/js-api && \
cp -R $DIR/../dist/* $DIR/../test/performance/test-webpack/node_modules/@alfresco/js-api && \

npm run build || exit 1
