#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
eval JS_API=true
eval GNU=false
eval EXEC_COMPONENT=true
eval DIFFERENT_JS_API=false
eval AUTO=false

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

prefix="@alfresco\/adf-"

show_help() {
    echo "Usage: update-version.sh"
    echo ""
    echo "-v or -version  version to update"
    echo "-gnu for gnu"
}

gnu_mode() {
    echo "====== GNU MODE ====="
    GNU=true
}

version_change() {
    echo "====== New version $1 ====="
    VERSION=$1
}

update_main_version() {
   echo "====== UPDATE MAIN PKG VERSION  to ${VERSION} in the package.json ======"
   sed "${sedi[@]}" "s/\"version\": \".*\"/\"version\": \"${VERSION}\"/g"  $DIR/../package.json
}

while [[ $1  == -* ]]; do
    case "$1" in
      -h|--help|-\?) show_help; exit 0;;
      -v|version) version_change $2; shift 2;;
      -gnu) gnu_mode; shift;;
      -*) shift;;
    esac
done

if $GNU; then
 sedi='-i'
else
 sedi=('-i' '')
fi

if [[ "${VERSION}" == "" ]]
then
  echo "Version number required"
  exit 1
fi

update_main_version
