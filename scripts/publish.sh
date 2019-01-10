#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/..

TAG="latest"

show_help() {
    echo "Usage: publish.sh"
    echo "-t or --tag Sets tag `latest` if no --tag specified "
    echo ""
}

tag_assign() {
   TAG=$1
}

while [[ $1 == -* ]]; do
    case "$1" in
      -t|--tag)  tag_assign $2; shift 2;;
      -*) echo "invalid option: $1" 1>&2; show_help; exit 1;;
    esac
done

cd dist/package/
npm publish --tag ${TAG}
cd ../../
