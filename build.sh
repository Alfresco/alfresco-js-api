#!/bin/sh

java -jar ../swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -i ../rest-api-explorer/src/main/webapp/definitions/alfresco-core.yaml -l javascript
browserify main.js -o bundle.js
