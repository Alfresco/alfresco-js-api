#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

ts-node ./test/integration/test-node/index.ts --host $HOST -u "$USERNAME" -p '$PASSWORD' || exit 1
ts-node ./test/integration/test-node/upload-file.ts --host $HOST -u "$USERNAME" -p '$PASSWORD' || exit 1
