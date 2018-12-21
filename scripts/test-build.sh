#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

rm -rf package/
rm -rf node_modules/alfresco-js-api/

npm run build_all

mkdir -p ./node_modules/@alfresco/js-api
mkdir -p ../alfresco-ng2-components/node_modules/@alfresco/js-api
cp -R ./dist/package/* ./node_modules/@alfresco/js-api
cp -R ./dist/package/* ../alfresco-ng2-components/node_modules/@alfresco/js-api
