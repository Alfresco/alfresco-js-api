'use strict';
var ApiClient = require('./alfresco-core-rest-api/src/ApiClient');

class AlfrescoWebScriptApi  {

    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
        this.allowedMethod = ['GET', 'POST', 'PUT', 'DELETE'];
    }
    /**
     * Call a get on a  Web Scripts see https://wiki.alfresco.com/wiki/Web_Scripts for more details about Web Scripts
     * Url syntax definition : http[s]://<host>:<port>/[<contextPath>/]/<servicePath>[/<scriptPath>][?<scriptArgs>]
     * example: http://localhost:8081/share/service/mytasks?priority=1
     *
     * @param {String} httpMethod  GET, POST, PUT and DELETE
     * @param {String} scriptPath
     * @param {Object} scriptArgs
     * @param {String} contextRoot default value alfresco
     * @param {String} servicePath default value service
     *
     * @returns {Promise} A promise that is resolved return the webScript data and {error} if rejected.
     */

    executeWebScript(httpMethod, scriptPath, scriptArgs, contextRoot, servicePath) {
        contextRoot = contextRoot || 'alfresco';
        servicePath = servicePath || 'service';

        if (!httpMethod  || this.allowedMethod.indexOf(httpMethod) === -1) {
            throw 'method allowed value  GET, POST, PUT and DELETE';
        }

        if (!scriptPath) {
            throw 'Missing the required parameter scriptPath when calling executeWebScript';
        }

        var postBody = null;

        var pathParams = {};
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = ['application/json'];
        var accepts = ['application/json', 'text/html'];
        var returnType = {};

        return this.apiClient.callApi(
            '/' +  servicePath + '/' + scriptPath, httpMethod,
            pathParams, scriptArgs, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType ,  contextRoot
        );
    }
}

module.exports = AlfrescoWebScriptApi;
