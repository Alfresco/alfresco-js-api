#!/bin/sh

defs_dir=../rest-api-explorer/src/main/webapp/definitions

java -jar ../swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -i $defs_dir/alfresco-core.yaml -l javascript -c client-config.json
browserify main.js -o bundle.js
