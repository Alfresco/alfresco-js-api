#!/bin/bash

if [[  $TRAVIS_BRANCH == "master" ]]; then
    TAG_VERSION=$(grep -m1 version package.json | awk '{ print $2 }' | sed 's/[", ]//g')
else
    TAG_VERSION=$(cat ../package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
fi;

echo "git tag -a ${VERSION} -m ${VERSION}"
git config --local user.name "alfresco-build"
git config --local user.email "build@alfresco.com"
git tag -a ${VERSION} -m "${VERSION} [ci skip] "
git remote rm origin
GITHUB_REPO=https://$GITHUB_TOKEN:x-oauth-basic@github.com/Alfresco/alfresco-ng2-components.git
git remote add origin $GITHUB_REPO
git push origin --tags
