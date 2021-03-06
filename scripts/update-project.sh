#!/usr/bin/env bash

BUILD_PIPELINE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_DIR="$BUILD_PIPELINE_DIR/../.."

TEMP_GENERATOR_DIR=".tmp-generator";
BRANCH_TO_CREATE="update-js-api"
COMMITISH_TO_UPDATE_TO=""
TOKEN=""
JSAPI_PR_NUMBER=""

show_help() {
    echo "Usage: create-updatebranch.sh"
    echo ""
    echo "-c or -commitish: The commitish to update jsapi to"
    echo "-t or --token: Github ouath token"
    echo "-p or --pr: Originating jsapi PR number"
}

set_commitish() {
    echo "Commitish: $1"
    COMMITISH_TO_UPDATE_TO=$1
}

set_token() {
    TOKEN=$1
}

set_pr() {
    JSAPI_PR_NUMBER=$1
}

version() {
    VERSION=$1
}

while [[ $1 == -* ]]; do
    case "$1" in
        -h|--help|-\?) show_help; exit 0;;
        -t|--token) set_token $2; shift; shift;;
        -p|--pr) set_pr $2; shift; shift;;
        -v|--version)  version $2; shift 2;;
        -*) echo "invalid option: $1" 1>&2; show_help; exit 1;;
    esac
done

cd "$REPO_DIR"

if [[ (-z "$TOKEN") || (-z "$JSAPI_PR_NUMBER") || (-z "$VERSION") ]]
  then
    echo "Each of 'branch name' (-b) and 'commitish' (-c), token (-t) and jsapi pr number (-p) have to be set. See -help."
    exit 1;
fi

git clone https://$TOKEN@github.com/Alfresco/alfresco-ng2-components.git $TEMP_GENERATOR_DIR
cd $TEMP_GENERATOR_DIR

git fetch

# Checkout branch if exist, otherwise create it
git checkout $BRANCH_TO_CREATE 2>/dev/null || git checkout -b $BRANCH_TO_CREATE origin/develop

JS_VERSION=$(npm view @alfresco/js-api@$VERSION version)

for i in $(find . ! -path "*/node_modules/*" -name "package-lock.json" | xargs grep -l 'js-api'); do
    directory=$(dirname $i)
    echo $directory
    ( cd $directory ; npm i --save-exact --ignore-scripts @alfresco/js-api@$VERSION)
done

for i in $(find . ! -path "*/node_modules/*" -name "package.json" | xargs grep -l 'js-api'); do
    directory=$(dirname $i)
    echo $directory
    if jq -e 'has("peerDependencies")' $directory/package.json > /dev/null; then
        tmp=$(mktemp)
        jq --arg JS_VERSION "$JS_VERSION" '.peerDependencies["@alfresco/js-api"] = $JS_VERSION' $directory/package.json > "$tmp" && mv "$tmp" $directory/package.json
    fi
done

git add .
git commit -n -m "[auto-commit] Update JS-API to $JS_VERSION for branch: $BRANCH_TO_CREATE originated from JS-API PR: $JSAPI_PR_NUMBER"
git push origin $BRANCH_TO_CREATE

node $BUILD_PIPELINE_DIR/pr-creator.js --token=$TOKEN --title="Update branch for JS-API PR#$JSAPI_PR_NUMBER" --head=$BRANCH_TO_CREATE --repo=alfresco-ng2-components

exit $?
