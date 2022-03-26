#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

rm -rf package/
rm -rf dist/
rm -rf node_modules/@alfresco/js-api/

npm install @alfresco/adf-cli@alpha --no-save

if [[ $GITHUB_BRANCH == "refs/heads/develop" ]];
then
    ./scripts/update-version.sh -gnu -nextalpha || exit 1;
fi

echo "====== Build ====="
npm run build

cat dist/package.json | grep version
