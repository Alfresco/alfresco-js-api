(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../../alfrescoApiClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../../alfrescoApiClient'));
    } else {
        // Browser globals (root is window)
        if (!root.AlfrescoCoreRestApi) {
            root.AlfrescoCoreRestApi = {};
        }
        root.AlfrescoCoreRestApi.CustomModelApi = factory(root.AlfrescoCoreRestApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';

    /**
     * Comments service.
     * @module api/CustomModelApi
     * @version 0.1.0
     */

    /**
     * Constructs a new CustomModelApi.
     * @alias module:api/CustomModelApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
     * if unspecified.
     */
    var exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
        this.private = true;
        /**
         * create Custom Model
          */
        this.createCustomModel = function(status, description, name, namespaceUri, namespacePrefix) {

            if (namespaceUri == undefined || namespaceUri == null) {
                throw "Missing the required parameter 'namespaceUri' when calling createCustomModel";
            }

            if (namespacePrefix == undefined || namespacePrefix == null) {
                throw "Missing the required parameter 'namespacePrefix' when calling createCustomModel";
            }

            var postBody = {
                "status" : status,
                "description" : description,
                "name" : name,
                "namespaceUri" : namespaceUri,
                "namespacePrefix" : namespacePrefix
            };

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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Create a custom type
         * @param {String} modelName
         * @param {String} name
         * @param {String} parentName
         * @param {String} description
         */
        this.createCustomType = function(modelName, name, parentName, title, description) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling createCustomType";
            }

            if (name == undefined || name == null) {
                throw "Missing the required parameter 'name' when calling createCustomType";
            }

            var postBody = {
                "name" : name,
                "parentName" : parentName,
                "title" :title,
                "description" : description
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/types', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Create a custom aspect
         * @param {String} modelName
         * @param {String} name
         * @param {String} parentName
         * @param {String} description
         */
        this.createCustomAspect = function(modelName, name, parentName, title, description) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling createCustomAspect";
            }

            if (name == undefined || name == null) {
                throw "Missing the required parameter 'name' when calling createCustomAspect";
            }

            var postBody = {
                "name" : name,
                "parentName" : parentName,
                "title" :title,
                "description" : description
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/aspects', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Create a custom constraint
          * @param {String} modelName
          * @param {String} name
          * @param {String} type
          * @param {Object} parameters
          */
        this.createCustomConstraint = function(modelName, name, type, parameters) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling createCustomConstraint";
            }
            if (type == undefined || type == null) {
                throw "Missing the required parameter 'type' when calling createCustomConstraint";
            }
            if (name == undefined || name == null) {
                throw "Missing the required parameter 'name' when calling createCustomConstraint";
            }

            var postBody = {
                "name" : name,
                "type" : type,
                "parameters":parameters
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/constraints', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Activate the custom model
         * @param {String} modelName
         */
        this.activateCustomModel = function(modelName) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling activateCustomModel";
            }

            var postBody = {
                "status" : "ACTIVE"
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}?select=status', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Deactivate the custom model
         * @param {String} modelName
         */
        this.deactivateCustomModel = function(modelName) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling deactivateCustomModel";
            }

            var postBody = {
                "status" : "DRAFT"
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}?select=status', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Add property into an existing aspect
         * @param {String} modelName
         * @param {String} aspectName
         * @param {Object} properties
          */
        this.addPropertyToAspect = function(modelName, aspectName, properties) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling addPropertyToAspect";
            }

            if (aspectName == undefined || aspectName == null) {
                throw "Missing the required parameter 'aspectName' when calling addPropertyToAspect";
            }

            var postBody = {
                "name" : aspectName,
                "properties" : properties
            };

            var pathParams = {
                "modelName" : modelName,
                "aspectName" : aspectName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/aspects/{aspectName}?select=props', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Add Property into an existing type
         * @param {String} modelName
         * @param {String} typeName
         * @param {Object} properties
          */
        this.addPropertyToType = function(modelName, typeName, properties) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling addPropertyToType";
            }

            if (typeName == undefined || typeName == null) {
                throw "Missing the required parameter 'typeName' when calling addPropertyToType";
            }

            var postBody = {
                "name" : typeName,
                "properties" : properties
            };

            var pathParams = {
                "modelName" : modelName,
                "typeName" :  typeName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/types/{typeName}?select=props', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Edit an existing custom model
         * @param {String} modelName
         * @param {String} description
         * @param {String} namespaceUri
         * @param {String} namespacePrefix
          */
        this.updateCustomModel = function(modelName, description, namespaceUri, namespacePrefix) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling updateCustomModel";
            }

            var postBody = {
                "name" : modelName,
                "description" : description,
                "namespaceUri" :namespaceUri,
                "namespacePrefix" :namespacePrefix
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Edit an existing custom model type
         * @param {String} modelName
         * @param {String} typeName
         * @param {String} description
         * @param {String} parentName
         * @param {String} title
          */
        this.updateCustomType = function(modelName, typeName, description, parentName, title) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling UpdateCustomType";
            }

            if (typeName == undefined || typeName == null) {
                throw "Missing the required parameter 'typeName' when calling UpdateCustomType";
            }

            var postBody = {
                "name" : modelName,
                "parentName" : parentName,
                "title" :title,
                "description" :description
            };

            var pathParams = {
                "modelName" : modelName,
                "typeName" : typeName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/types/{typeName}', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Edit an existing custom model aspect
         * @param {String} modelName
         * @param {String} aspectName
         * @param {String} description
         * @param {String} parentName
         * @param {String} title
          */
        this.updateCustomAspect = function(modelName, aspectName, description, parentName, title) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling updateCustomAspect";
            }

            if (aspectName == undefined || aspectName == null) {
                throw "Missing the required parameter 'aspectName' when calling updateCustomAspect";
            }

            var postBody = {
                "name" : modelName,
                "parentName" : parentName,
                "title" :title,
                "description" :description
            };

            var pathParams = {
                "modelName" : modelName,
                "aspectName" : aspectName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/aspects/{aspectName}', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get all custom models
         */
        this.getAllCustomModel = function() {

            var postBody = {
            };

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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get custom model
         * @param {String} modelName
         * @param {Object} queryParams
         */
        this.getCustomModel = function(modelName, queryParams) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getCustomModel";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName
            };

            var queryParams = queryParams || {};

            var headerParams = {
            };
            var formParams = {
            };

            var authNames = ['basicAuth'];
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get all custom model types
         * @param {String} modelName
         */
        this.getAllCustomType = function(modelName) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getAllCustomType";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/types', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get custom model type
         * @param {String} modelName
         * @param {String} typeName
         * @param {Object} queryParams
         */
        this.getCustomType = function(modelName, typeName, queryParams) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getCustomType";
            }

            if (typeName == undefined || typeName == null) {
                throw "Missing the required parameter 'typeName' when calling getCustomType";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName,
                "typeName" : typeName
            };

            var queryParams = queryParams || {};

            var headerParams = {
            };
            var formParams = {
            };

            var authNames = ['basicAuth'];
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/types/{typeName}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get all custom model aspect
         * @param {String} modelName
         */
        this.getAllCustomAspect = function(modelName) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getAllCustomAspect";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName
            };

            var queryParams = queryParams || {};

            var headerParams = {
            };
            var formParams = {
            };

            var authNames = ['basicAuth'];
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/aspects', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get custom model aspect
         * @param {String} modelName
         * @param {String} aspectName
         * @param {Object} queryParams
         */
        this.getCustomAspect = function(modelName, aspectName, queryParams) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getCustomAspect";
            }

            if (aspectName == undefined || aspectName == null) {
                throw "Missing the required parameter 'aspectName' when calling getCustomAspect";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName,
                "aspectName" : aspectName
            };

            var queryParams = queryParams || {};

            var headerParams = {
            };
            var formParams = {
            };

            var authNames = ['basicAuth'];
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/aspects/{aspectName}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get all custom model defined constraints
         * @param {String} modelName
         */
        this.getAllCustomConstraints = function(modelName) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getAllCustomConstraints";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName
            };

            var queryParams = queryParams || {};

            var headerParams = {
            };
            var formParams = {
            };

            var authNames = ['basicAuth'];
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/constraints', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Get custom model defined constraints
         * @param {String} modelName
         * @param {String} constraintName
         * @param {Object} queryParams
         */
        this.getCustomConstraints = function(modelName, constraintName, queryParams) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getCustomConstraints";
            }

            if (constraintName == undefined || constraintName == null) {
                throw "Missing the required parameter 'constraintName' when calling getCustomConstraints";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName,
                "constraintName" : constraintName
            };

            var queryParams = queryParams || {};

            var headerParams = {
            };
            var formParams = {
            };

            var authNames = ['basicAuth'];
            var contentTypes = ['application/json'];
            var accepts = ['application/json'];
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/constraints{constraintName}', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Delete the given custom model
         * @param {String} modelName
         */
        this.deleteCustomModel = function(modelName) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling deleteCustomModel";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}', 'DELETE',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

        /**
         * Delete the given custom type
         * @param {String} modelName
         * @param {String} typeName
         */
        this.deleteCustomType = function(modelName, typeName) {

            if (modelName == undefined || modelName == null) {
                throw "Missing the required parameter 'modelName' when calling getCustomConstraints";
            }

            if (typeName == undefined || typeName == null) {
                throw "Missing the required parameter 'modelName' when calling deleteCustomType";
            }

            var postBody = {
            };

            var pathParams = {
                "modelName" : modelName,
                "typeName" : typeName
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
            var returnType = {};

            return this.apiClient.callApi(
                'cmm/{modelName}/types/{typeName}', 'DELETE',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        }

    };

    return exports;
}));
