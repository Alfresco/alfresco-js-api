(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/LoginTicketEntry', '../model/LoginRequest', '../model/ValidateTicketEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/LoginTicketEntry'), require('../model/LoginRequest'), require('../model/ValidateTicketEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.AuthenticationApi = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.Error, root.AlfrescoAuthRestApi.LoginTicketEntry, root.AlfrescoAuthRestApi.LoginRequest, root.AlfrescoAuthRestApi.ValidateTicketEntry);
  }
}(this, function(ApiClient, Error, LoginTicketEntry, LoginRequest, ValidateTicketEntry) {
  'use strict';

  /**
   * Authentication service.
   * @module api/AuthenticationApi
   * @version 0.1.0
   */

  /**
   * Constructs a new AuthenticationApi.
   * @alias module:api/AuthenticationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create ticket (login)
     * Logs in and returns the new authentication ticket.\nThe userId and password properties are mandatory in the request body. For example:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;userId\&quot;: \&quot;jbloggs\&quot;,\n    \&quot;password\&quot;: \&quot;password\&quot;\n}\n&#x60;&#x60;&#x60;\nTo use the ticket in future requests you should pass it in the request header.\nFor example using Javascript:\n  &#x60;&#x60;&#x60;Javascript\n    request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));\n  &#x60;&#x60;&#x60;\n
     * @param {module:model/LoginRequest} loginRequest The user credential.
     * data is of type: {module:model/LoginTicketEntry}
     */
    this.createTicket = function(loginRequest) {
      var postBody = loginRequest;

      // verify the required parameter 'loginRequest' is set
      if (loginRequest == undefined || loginRequest == null) {
        throw "Missing the required parameter 'loginRequest' when calling createTicket";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoginTicketEntry;

      return this.apiClient.callApi(
        '/tickets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, 'application/json'
      );
    }


    /**
     * Delete ticket (logout)
     * Deletes logged in ticket (logout).\n
     */
    this.deleteTicket = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tickets/-me-', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Validate ticket
     * Validates the specified ticket (derived from Authorization header) is still valid.\n\nFor example, you can pass the Authorization request header using Javascript:\n  &#x60;&#x60;&#x60;Javascript\n    request.setRequestHeader (\&quot;Authorization\&quot;, \&quot;Basic \&quot; + btoa(ticket));\n  &#x60;&#x60;&#x60;\n
     * data is of type: {module:model/ValidateTicketEntry}
     */
    this.validateTicket = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidateTicketEntry;

      return this.apiClient.callApi(
        '/tickets/-me-', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
