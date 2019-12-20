#!/bin/bash

if [[  $TRAVIS_BRANCH == "master" ]]; then
    VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
else
    VERSION=$(npm view @alfresco/js-api@beta version)
fi;

echo $VERSION

echo "git tag -a ${VERSION} -m ${VERSION}"
git config --local user.name "eromano"
git config --local user.email "eugenioromano16@gmail.com"
git tag -a ${VERSION} -m "${VERSION} [ci skip] "
git remote rm origin
GITHUB_REPO=https://$GITHUB_TOKEN:x-oauth-basic@github.com/Alfresco/alfresco-js-api.git
git remote add origin $GITHUB_REPO
git push origin --tags
