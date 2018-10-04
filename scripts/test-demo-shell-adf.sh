#!/usr/bin/env bash


TEMP_ADF_DIR=".tmp-demo-shell";

echo "====== Install JS-API  ====="

npm install

echo "====== Link JS-API  ====="

npm link

rm -rf $TEMP_ADF_DIR;

echo "====== CLONE ADF ====="

git clone https://$TOKEN@github.com/Alfresco/alfresco-ng2-components.git $TEMP_ADF_DIR
cd $TEMP_ADF_DIR/
git checkout development

echo "====== INSTALL Demo Shell ====="

npm install
npm link alfresco-js-api

echo "====== E2E Demo Shell ====="
npm run e2e || exit 1

rm -rf $TEMP_ADF_DIR;

# dummy commit
