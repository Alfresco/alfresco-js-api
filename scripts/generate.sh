#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


cd $DIR/../api-codegen

mvn package

cd $DIR/..

java -cp api-codegen/target/api-code-gen-swagger-codegen-1.0.0.jar:api-codegen/swagger-codegen-cli.jar \
io.swagger.codegen.SwaggerCodegen generate \
-l api-code-gen \
-i definitions/alfresco-core.yaml \
-o example

