#!/bin/sh

defs_dir=../rest-api-explorer/src/main/webapp/definitions

java -jar ../swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -i $defs_dir/alfresco-auth.yaml -l javascript -o alfresco-auth-rest-api -c alfresco-auth-rest-api/client-config.json
java -jar ../swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -i $defs_dir/alfresco-core.yaml -l javascript -o alfresco-core-rest-api -c alfresco-core-rest-api/client-config.json

browserify main.js -o bundle.js
