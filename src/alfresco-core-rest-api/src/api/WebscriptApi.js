(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.WebscriptApi = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function (ApiClient) {
  'use strict';

  /**
   * Tags service.
   * @module api/WebscriptApi
   * @version 0.1.0
   */

  /**
   * Constructs a new WebscriptApi.
   * @alias module:api/WebscriptApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
    this.allowedMethod = ['GET', 'POST', 'PUT', 'DELETE'];

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
     * @param {String} postBody
     *
     * @returns {Promise} A promise that is resolved return the webScript data and {error} if rejected.
     */

    this.executeWebScript = function (httpMethod, scriptPath, scriptArgs, contextRoot, servicePath, postBody) {
      contextRoot = contextRoot || 'alfresco';
      servicePath = servicePath || 'service';
      postBody = postBody || null;

      if (!httpMethod || this.allowedMethod.indexOf(httpMethod) === -1) {
        throw 'method allowed value  GET, POST, PUT and DELETE';
      }

      if (!scriptPath) {
        throw 'Missing the required parameter scriptPath when calling executeWebScript';
      }

      var pathParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = {};

      return this.apiClient.callApi(
        '/' + servicePath + '/' + scriptPath, httpMethod,
        pathParams, scriptArgs, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, contextRoot
      );
    }
  };

  return exports;
}));
