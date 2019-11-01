#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

cat dist/package/package.json | grep version

mkdir -p $DIR/../test/integration/test-node/node_modules/@alfresco/js-api
cp -R $DIR/../dist/package/* $DIR/../test/integration/test-node/node_modules/@alfresco/js-api

ts-node ./test/integration/test-node/index.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
ts-node ./test/integration/test-node/login-bpmn.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
ts-node ./test/integration/test-node/upload-file.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
