(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/FormRepresentation', '../model/FormSaveRepresentation', '../model/ValidationErrorRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/FormRepresentation'), require('../model/FormSaveRepresentation'), require('../model/ValidationErrorRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.EditorApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.FormRepresentation, root.ActivitiPublicRestApi.FormSaveRepresentation, root.ActivitiPublicRestApi.ValidationErrorRepresentation);
  }
}(this, function(ApiClient, FormRepresentation, FormSaveRepresentation, ValidationErrorRepresentation) {
  'use strict';

  /**
   * Editor service.
   * @module api/EditorApi
   * @version 1.4.0
   */

  /**
   * Constructs a new EditorApi.
   * @alias module:api/EditorApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the getFormHistory operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getFormHistory
     * @param {Integer} formId formId
     * @param {Integer} formHistoryId formHistoryId
     */
    this.getFormHistory = function(formId, formHistoryId) {
      var postBody = null;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling getFormHistory";
      }

      // verify the required parameter 'formHistoryId' is set
      if (formHistoryId == undefined || formHistoryId == null) {
        throw "Missing the required parameter 'formHistoryId' when calling getFormHistory";
      }


      var pathParams = {
        'formId': formId,
        'formHistoryId': formHistoryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FormRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/editor/form-models/{formId}/history/{formHistoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForm
     * @param {Integer} formId formId
     */
    this.getForm = function(formId) {
      var postBody = null;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling getForm";
      }


      var pathParams = {
        'formId': formId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FormRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/editor/form-models/{formId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getForms operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForms
     * data is of type: {Array.<module:model/FormRepresentation>}
     */
    this.getForms = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [FormRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/editor/form-models/values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the saveForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveForm
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     */
    this.saveForm = function(formId, saveRepresentation) {
      var postBody = saveRepresentation;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling saveForm";
      }

      // verify the required parameter 'saveRepresentation' is set
      if (saveRepresentation == undefined || saveRepresentation == null) {
        throw "Missing the required parameter 'saveRepresentation' when calling saveForm";
      }


      var pathParams = {
        'formId': formId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FormRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/editor/form-models/{formId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the validateModel operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ValidationErrorRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * validateModel
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     */
    this.validateModel = function(formId, saveRepresentation) {
      var postBody = saveRepresentation;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling validateModel";
      }

      // verify the required parameter 'saveRepresentation' is set
      if (saveRepresentation == undefined || saveRepresentation == null) {
        throw "Missing the required parameter 'saveRepresentation' when calling validateModel";
      }


      var pathParams = {
        'formId': formId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ValidationErrorRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/editor/form-models/{formId}/validate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
