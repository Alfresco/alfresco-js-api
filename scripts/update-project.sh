#!/usr/bin/env bash

set -e
TEMP_GENERATOR_DIR=".tmp-generator";
VERSION=latest

show_help() {
    echo "Usage: update-project.sh"
    echo ""
    echo "-t or --token  Github ouath token"
    echo "-n or --name  Github name of the project"
    echo "-v tag of the API"
}

token() {
    TOKEN=$1
}

version() {
    VERSION=$1
}

name_repo() {
    NAME_REPO=$1
}

while [[ $1 == -* ]]; do
    case "$1" in
      -h|--help|-\?) show_help; exit 0;;
      -n|--name|-\?)  name_repo $2; shift 2;;
      -t|--token)  token $2; shift 2;;
      -v|--version)  version $2; shift 2;;
      -*) echo "invalid option: $1" 1>&2; show_help; exit 1;;
    esac
done

rm -rf $TEMP_GENERATOR_DIR;

git clone https://$TOKEN@github.com/$NAME_REPO.git $TEMP_GENERATOR_DIR
cd $TEMP_GENERATOR_DIR
git checkout develop

JS_VERSION=$(npm view @alfresco/js-api@$VERSION version)

BRANCH="JS-API-Update-$JS_VERSION"
git checkout -b $BRANCH

./script/update-version.sh -vj $JS_VERSION

git add .
git commit -m "Update JS-API packages version $JS_VERSION"
git push -u origin $BRANCH

curl -H "Authorization: token $TOKEN" -X POST -d '{"body":"Update JS-API packages version '$VERSION'","head":"'$BRANCH'","base":"develop","title":"Update JS-API packages version '$VERSION'"}' https://api.github.com/repos/$NAME_REPO/pulls

rm -rf $TEMP_GENERATOR_DIR;
