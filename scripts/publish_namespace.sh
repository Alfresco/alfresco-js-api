#!/usr/bin/env bash

eval GNU=false
eval OPTIONS=""

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

show_help() {
    echo "Build and publish the namespace version of the alfresco-js-api"
    echo ""
    echo "-gnu for gnu"
    echo "-t or --tag to add a tag when publish a package"
}

gnu_mode() {
    echo "====== GNU MODE ====="
    GNU=true
}

add_tag(){
    eval TAG=$1

    if [[ "${TAG}" == "" ]]
    then
      echo "tag missing -t | -tag"
      exit 0
    fi

    echo "====== TAG WILL BE ADDED DURING THE PUBLISH: ${TAG} ====="
    OPTIONS="$OPTIONS --tag $1"
}

while [[ $1  == -* ]]; do
    case "$1" in
      -h|--help|-\?) show_help; exit 0;;
      -gnu) gnu_mode; shift;;
      -t|--tag)  add_tag $2; shift 2;;
      -*) shift;;
    esac
done

if $GNU; then
 sedi='-i'
else
 sedi=('-i' '')
fi

update_component_version() {
   echo "====== Change name package.json ======"
   DESTDIR="$DIR/.."
   sed "${sedi[@]}" "s/\"name\": \".*\"/\"name\": \"@alfresco\/js-api\"/g"  ${DESTDIR}/package.json
}

restore() {
   echo "====== Restore name package.json ======"
   DESTDIR="$DIR/.."
   sed "${sedi[@]}" "s/\"name\": \".*\"/\"name\": \"alfresco-js-api\"/g"  ${DESTDIR}/package.json
}


update_component_version

npm publish ${OPTIONS} --access=public

restore
