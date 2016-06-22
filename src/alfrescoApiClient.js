'use strict';
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var ApiClient = require('../alfresco-core-rest-api/src/ApiClient');

class AlfrescoApiClient extends ApiClient {

    constructor() {
        super();
    }

    callApi(path, httpMethod, pathParams,
            queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
            returnType) {

        return new Promise((resolve, reject) => {
            super.callApi(path, httpMethod, pathParams,
                queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
                returnType).
            then((data) => {
                resolve(data);
            }, (error)  => {
                if (error.error.status === 401) {
                    this.emit('unauthorized');
                }
                reject(error);
            });
        });
    }
}

util.inherits(ApiClient, EventEmitter);
module.exports = AlfrescoApiClient;
