#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

show_help() {
    echo "Usage: generate.sh -def definitions/alfresco-core.yaml -o example  "
    echo "-def definition file where to generate the api"
    echo "-o output folder of the generated code"
    echo ""
}

defintion() {
   DEFINTION_FILE=$1
}

output() {
   OUTPUT_FOLDER=$1
}

while [[ $1 == -* ]]; do
    case "$1" in
      -h|--help|-\?) show_help; exit 0;;
      -def)  defintion $2; shift 2;;
      -o)  output $2; shift 2;;
      -*) echo "invalid option: $1" 1>&2; show_help; exit 1;;
    esac
done


cd $DIR/../api-codegen

mvn package

cd $DIR/..

echo "================== Generate files =================="

java -cp api-codegen/target/api-code-gen-swagger-codegen-1.0.0.jar:api-codegen/swagger-codegen-cli.jar \
io.swagger.codegen.SwaggerCodegen generate \
-l api-code-gen \
-i $DEFINTION_FILE \
-o $OUTPUT_FOLDER

rm -rf $OUTPUT_FOLDER/.swagger-codegen-ignore
rm -rf $OUTPUT_FOLDER/.swagger-codegen

echo "================== Format generated files =================="

npm run format-ts --$OUTPUT_FOLDER/*.*
