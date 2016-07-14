(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FormRepresentation', 'model/FormSaveRepresentation', 'model/ValidationErrorRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FormRepresentation'), require('../model/FormSaveRepresentation'), require('../model/ValidationErrorRepresentation'));
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
     * Callback function to receive the result of the getFormHistoryUsingGET operation.
     * @callback module:api/EditorApi~getFormHistoryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getFormHistory
     * @param {Integer} formId formId
     * @param {Integer} formHistoryId formHistoryId
     * @param {module:api/EditorApi~getFormHistoryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormRepresentation}
     */
    this.getFormHistoryUsingGET = function(formId, formHistoryId, callback) {
      var postBody = null;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling getFormHistoryUsingGET";
      }

      // verify the required parameter 'formHistoryId' is set
      if (formHistoryId == undefined || formHistoryId == null) {
        throw "Missing the required parameter 'formHistoryId' when calling getFormHistoryUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFormUsingGET operation.
     * @callback module:api/EditorApi~getFormUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForm
     * @param {Integer} formId formId
     * @param {module:api/EditorApi~getFormUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormRepresentation}
     */
    this.getFormUsingGET = function(formId, callback) {
      var postBody = null;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling getFormUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFormsUsingGET operation.
     * @callback module:api/EditorApi~getFormsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForms
     * @param {module:api/EditorApi~getFormsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FormRepresentation>}
     */
    this.getFormsUsingGET = function(callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveFormUsingPUT operation.
     * @callback module:api/EditorApi~saveFormUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveForm
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     * @param {module:api/EditorApi~saveFormUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormRepresentation}
     */
    this.saveFormUsingPUT = function(formId, saveRepresentation, callback) {
      var postBody = saveRepresentation;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling saveFormUsingPUT";
      }

      // verify the required parameter 'saveRepresentation' is set
      if (saveRepresentation == undefined || saveRepresentation == null) {
        throw "Missing the required parameter 'saveRepresentation' when calling saveFormUsingPUT";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateModelUsingPUT operation.
     * @callback module:api/EditorApi~validateModelUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ValidationErrorRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * validateModel
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     * @param {module:api/EditorApi~validateModelUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ValidationErrorRepresentation>}
     */
    this.validateModelUsingPUT = function(formId, saveRepresentation, callback) {
      var postBody = saveRepresentation;

      // verify the required parameter 'formId' is set
      if (formId == undefined || formId == null) {
        throw "Missing the required parameter 'formId' when calling validateModelUsingPUT";
      }

      // verify the required parameter 'saveRepresentation' is set
      if (saveRepresentation == undefined || saveRepresentation == null) {
        throw "Missing the required parameter 'saveRepresentation' when calling validateModelUsingPUT";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
