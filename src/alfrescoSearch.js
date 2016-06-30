'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');

class alfrescoSearch {

    constructor(alfrescoClient) {
        this.searchApiInstance = new AlfrescoCoreRestApi.SearchApi(alfrescoClient);
    }

}

module.exports = alfrescoSearch;
