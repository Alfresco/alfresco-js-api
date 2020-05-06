#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

rm -rf package/
rm -rf dist/
rm -rf node_modules/@alfresco/js-api/

npm install @alfresco/adf-cli@alpha --no-save

if [[ $TRAVIS_PULL_REQUEST == "false" ]];
then
    if [[ $TRAVIS_BRANCH == "develop" ]];
    then
        NEXT_VERSION=-nextalpha
        if [[ $TRAVIS_EVENT_TYPE == "cron" ]];
        then
            NEXT_VERSION=-nextbeta
        fi
        ./scripts/update-version.sh -gnu $NEXT_VERSION || exit 1;
    fi

else
    ./node_modules/@alfresco/adf-cli/bin/adf-cli update-version --alpha --pathPackage "$(pwd)"
fi;

echo "====== Build ====="
npm run build

cat dist/package/package.json | grep version
