#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

rm -rf package
rm -rf /node_modules/alfresco-js-api

npm run webpack

npm pack

tar -xzf alfresco-js-api-2.6.0.tgz

mkdir -p ./node_modules/alfresco-js-api
cp -R package/* ./node_modules/alfresco-js-api
