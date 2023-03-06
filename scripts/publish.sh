#!/bin/bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd $DIR/..

TAG_NPM=alpha

if [[ $GITHUB_BRANCH == "refs/heads/master" ]]; then
    TAG_NPM=latest
fi

cd dist/

echo "Publishing on npm registry: ${NPM_REGISTRY_ADDRESS} with tag $TAG_NPM"

cat package.json | grep version

npm publish --tag ${TAG_NPM} || exit 1
