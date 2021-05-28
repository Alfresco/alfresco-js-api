#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

if [[ $TRAVIS_PULL_REQUEST == "false" ]];
then
    TAG_NPM=latest
    if [[ $TRAVIS_BRANCH == "develop" ]];
    then
        TAG_NPM=alpha
        if [[ $TRAVIS_EVENT_TYPE == "cron" ]];
        then
            TAG_NPM=beta
        fi
    fi

    echo "Publishing on npm with tag $TAG_NPM"

    touch ./dist/.npmrc
    echo 'strict-ssl=false' >> ./dist/.npmrc
    echo 'registry=http://${NPM_REGISTRY_ADDRESS}' >> ./dist/.npmrc
    echo '//${NPM_REGISTRY_ADDRESS}/:_authToken="${NPM_REGISTRY_TOKEN}"' >> ./dist/.npmrc

    cd dist/

    cat package.json | grep version

    npm publish --tag ${TAG_NPM} || exit 1

    rm -rf .npmrc

    cd ../../

fi;

