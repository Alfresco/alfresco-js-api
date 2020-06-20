#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

cat dist/package.json | grep version

cd $DIR/../test/integration/test-node
npm install

mkdir -p $DIR/../test/integration/test-node/node_modules/@alfresco/js-api
cp -R $DIR/../dist/* ./node_modules/@alfresco/js-api

ts-node login-ecm.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
ts-node login-bpmn.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
ts-node upload-file.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" || exit 1
ts-node login-sso.ts --host $HOST -u "$USERNAME" -p "$PASSWORD" --ssoHost "$SSO_HOST" --clientId "$CLIENT_ID" || exit 1
