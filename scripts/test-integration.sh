#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/.. || exit 1

cat dist/package.json | grep version

mkdir -p $DIR/../test/integration/test-node/node_modules/@alfresco/js-api
cp -R $DIR/../dist/* $DIR/../test/integration/test-node/node_modules/@alfresco/js-api

npx ts-node ./test/integration/test-node/login-ecm.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
#npx ts-node ./test/integration/test-node/upload-file.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
#npx ts-node ./test/integration/test-node/login-bpmn.ts --host $HOST -u "$USERNAME" -p "$PASSWORD"  || exit 1
#npx ts-node ./test/integration/test-node/login-sso.ts --host $HOST -u "$USERNAME" -p "$PASSWORD"   || exit 1
#npx ts-node ./test/integration/test-node/node-content.ts --host $HOST -u "$USERNAME" -p "$PASSWORD"   || exit 1
