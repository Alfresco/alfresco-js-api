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
     * Callback function to receive the result of the getFormHistory operation.
     * @callback module:api/EditorApi~getFormHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getFormHistory
     * @param {Integer} formId formId
     * @param {Integer} formHistoryId formHistoryId
     * @param {module:api/EditorApi~getFormHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormRepresentation}
     */
    this.getFormHistory = function(formId, formHistoryId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getForm operation.
     * @callback module:api/EditorApi~getFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForm
     * @param {Integer} formId formId
     * @param {module:api/EditorApi~getFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormRepresentation}
     */
    this.getForm = function(formId, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getForms operation.
     * @callback module:api/EditorApi~getFormsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getForms
     * @param {module:api/EditorApi~getFormsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FormRepresentation>}
     */
    this.getForms = function(callback) {
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
     * Callback function to receive the result of the saveForm operation.
     * @callback module:api/EditorApi~saveFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * saveForm
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     * @param {module:api/EditorApi~saveFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormRepresentation}
     */
    this.saveForm = function(formId, saveRepresentation, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateModel operation.
     * @callback module:api/EditorApi~validateModelCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ValidationErrorRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * validateModel
     * @param {Integer} formId formId
     * @param {module:model/FormSaveRepresentation} saveRepresentation saveRepresentation
     * @param {module:api/EditorApi~validateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ValidationErrorRepresentation>}
     */
    this.validateModel = function(formId, saveRepresentation, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
