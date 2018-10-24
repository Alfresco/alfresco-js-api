(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../../alfrescoApiClient', '../model/ObjectNode'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ObjectNode'));
    } else {
        // Browser globals (root is window)
        if (!root.ActivitiPublicRestApi) {
            root.ActivitiPublicRestApi = {};
        }
        root.ActivitiPublicRestApi.ModelJsonBpmnApi = factory(root.ActivitiPublicRestApi.ApiClient);
    }
}(this, function(ApiClient, ObjectNode) {
    'use strict';

    /**
     * ModelBpmn service.
     * @module api/ModelJsonBpmnApi
     * @version 1.4.0
     */

    /**
     * Constructs a new ModelJsonBpmnApi.
     * @alias module:api/ModelJsonBpmnApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    var exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;


        /**
         * Function to receive the result of the getHistoricEditorDisplayJsonClient operation.
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Export a previous process definition model to a JSON
         * @param {Integer} processModelId processModelId
         * @param {Integer} processModelHistoryId processModelHistoryId
         */
        this.getHistoricEditorDisplayJsonClient = function(processModelId, processModelHistoryId) {
            var postBody = null;

            // verify the required parameter 'processModelId' is set
            if (processModelId == undefined || processModelId == null) {
                throw "Missing the required parameter 'processModelId' when calling getHistoricEditorDisplayJsonClient";
            }

            // verify the required parameter 'processModelHistoryId' is set
            if (processModelHistoryId == undefined || processModelHistoryId == null) {
                throw "Missing the required parameter 'processModelHistoryId' when calling getHistoricEditorDisplayJsonClient";
            }


            var pathParams = {
                'processModelId': processModelId,
                'processModelHistoryId': processModelHistoryId
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
            var returnType = ObjectNode;

            return this.apiClient.callApi(
                '/app/rest/models/{processModelId}/history/{processModelHistoryId}/model-json', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Function to receive the result of the getEditorDisplayJsonClient operation.
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

        /**
         * Export a process definition model to a JSON
         * @param {Integer} processModelId processModelId
         */
        this.getEditorDisplayJsonClient = function(processModelId) {
            var postBody = null;

            // verify the required parameter 'processModelId' is set
            if (processModelId == undefined || processModelId == null) {
                throw "Missing the required parameter 'processModelId' when calling getEditorDisplayJsonClient";
            }


            var pathParams = {
                'processModelId': processModelId
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
            var returnType = ObjectNode;

            return this.apiClient.callApi(
                '/app/rest/models/{processModelId}/model-json', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

      /**
       * Function to receive the result of the getModelJSONForProcessDefinition operation.
       * @param {String} error Error message, if any.
       * @param data This operation does not return a value.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {String} processDefinitionId processDefinitionId
       */
        this.getModelJSON = function(processDefinitionId) {
            var postBody = null;

            if (processDefinitionId == undefined || processDefinitionId == null) {
                throw "Missing the required parameter 'processDefinitionId' when calling getProcessDefinitionModel";
            }

            var pathParams = {
                'processDefinitionId': processDefinitionId
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
            var returnType = ObjectNode;

            return this.apiClient.callApi(
              '/app/rest/process-definitions/{processDefinitionId}/model-json', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

      /**
       * Function to receive the result of the getModelHistoryJSON operation.
       * @param {String} error Error message, if any.
       * @param data This operation does not return a value.
       * @param {String} response The complete HTTP response.
       */

      /**
       * @param {String} processInstanceId processInstanceId
       */
        this.getModelJSONForProcessDefinition = function(processInstanceId) {
            var postBody = null;

            if (processInstanceId == undefined || processInstanceId == null) {
                throw "Missing the required parameter 'processInstanceId' when calling getProcessInstancesModel";
            }

            var pathParams = {
                'processInstanceId': processInstanceId
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
            var returnType = ObjectNode;

            return this.apiClient.callApi(
              '/app/rest/process-instances/{processInstanceId}/model-json', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }
    };

    return exports;
}));
