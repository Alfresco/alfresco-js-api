#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
eval JS_API=true
eval GNU=false
eval AUTO=false
eval TOTAL_BUILD=true;
eval SEMANTIC="minor";

cd `dirname $0`

prefix="@alfresco\/adf-"

show_help() {
    echo "Usage: update-version.sh"
    echo ""
    echo "-v or -version  version to update"
    echo "-major increase the major number and reset minor and patch"
    echo "-minor increase the minor number and reset the patch number"
    echo "-patch increase the patch number"
    echo "-nextalpha update next alpha version of js-api and lib automatically"
    echo "-nextbeta update next beta version of js-api and lib automatically"
    echo "-alpha update last alpha version of js-api and lib automatically"
    echo "-beta update beta alpha version of js-api and lib automatically"
    echo "-gnu for gnu"
}

version_change() {
    echo "====== New version $1 ====="
    VERSION=$1
}

last_alpha_mode() {
    length=`expr $projectslength - 1`
    echo "====== Auto find last ALPHA version of ${projects[${length}]} ====="
    VERSION=$(npm view @alfresco/adf-${projects[${length}]}@alpha version)

    echo "====== version ${VERSION} ====="
}

next_alpha_mode() {
    echo "====== Auto find next ALPHA version ===== ${SEMANTIC} "
    VERSION=$(./next_version.sh -${SEMANTIC} -alpha)

    echo "====== version ${VERSION} ====="
}

next_beta_mode() {
    echo "====== Auto find next BETA version ===== ${SEMANTIC}"
    VERSION=$(./next_version.sh -${SEMANTIC} -beta)

    echo "====== version ${VERSION} ====="
}

last_beta_mode() {
    echo "====== Auto find last BETA version ====="
    VERSION=$(npm view @alfresco/adf-core@beta version)

    echo "====== version ${VERSION} ====="
}

gnu_mode() {
    echo "====== GNU MODE ====="
    GNU=true
}

semantic_set() {
    echo "====== semantic MODE $1 ====="
    SEMANTIC=$1
}

update_main_version() {
   echo "====== UPDATE MAIN PKG VERSION  to ${VERSION} in the package.json ======"
   npm version --allow-same-version --no-git-tag-version --force ${VERSION}
}

args=("$@")

while [[ $1  == -* ]]; do
    case "$1" in
      -major)  semantic_set "major"; shift;;
      -minor)  semantic_set "minor"; shift;;
      -patch) semantic_set "patch"; shift;;
      -*) shift;;
    esac
done

set -- "${args[@]}"

while [[ $1  == -* ]]; do
    case "$1" in
      -h|--help|-\?) show_help; exit 0;;
      -v|version) version_change $2; shift 2;;
      -gnu) gnu_mode; shift;;
      -alpha) last_alpha_mode; shift;;
      -nextalpha) next_alpha_mode; shift;;
      -beta) last_beta_mode; shift;;
      -nextbeta) next_beta_mode; shift;;
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
