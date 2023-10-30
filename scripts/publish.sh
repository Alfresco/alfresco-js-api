#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd $DIR/..

TAG_NPM=alpha

if [[ $GITHUB_BRANCH == "refs/heads/master" ]]; then
    TAG_NPM=latest
fi

npm run build

cd dist/js-api

echo "Publishing on npm with tag $TAG_NPM"

cat package.json | grep version

npm publish --tag ${TAG_NPM} || exit 1

rm -rf .npmrc
