#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

rm -rf package/
rm -rf node_modules/@alfresco/js-api/

npm install @alfresco/adf-cli@alpha

if [[ $TRAVIS_PULL_REQUEST == "false" ]];
then
    if [[ $TRAVIS_BRANCH == "development" ]];
    then
        NEXT_VERSION=-nextalpha
        if [[ $TRAVIS_EVENT_TYPE == "cron" ]];
        then
            NEXT_VERSION=-nextbeta
        fi
        ./scripts/update-version.sh -gnu $NEXT_VERSION || exit 1;
    fi

    node ./scripts/pre-publish.js

else
    ./node_modules/@alfresco/adf-cli/bin/adf-cli update-version --alpha --pathPackage "$(pwd)"
fi;

echo "====== Build ====="
npm run build_all

