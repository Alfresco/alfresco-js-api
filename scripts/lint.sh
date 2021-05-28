#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

npm run lint || exit 1;
npm run spellcheck  || exit 1;

if grep "envalfresco" . -R --exclude-dir={node_modules,.history,.idea,scripts,dist} --exclude=".env.cloud"; then
    echo not permitted word
    exit 1
fi

