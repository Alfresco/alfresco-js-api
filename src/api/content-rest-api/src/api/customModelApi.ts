/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { BaseApi } from './baseApi';
import { AlfrescoApi } from '../../../alfrescoApi';

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
export class CustomModelApi extends BaseApi {

    private: boolean = true;

    constructor(alfrescoApi?: AlfrescoApi) {
        super();
        this.apiClient = alfrescoApi.ecmPrivateClient;
    }

    /**
     * create Custom Model
     */
    createCustomModel(status, description, name, namespaceUri, namespacePrefix): Promise<any> {

        if (namespaceUri === undefined || namespaceUri === null) {
            throw "Missing param 'namespaceUri' in createCustomModel";
        }

        if (namespacePrefix === undefined || namespacePrefix === null) {
            throw "Missing param 'namespacePrefix' in createCustomModel";
        }

        let postBody = {
            'status': status,
            'description': description,
            'name': name,
            'namespaceUri': namespaceUri,
            'namespacePrefix': namespacePrefix
        };

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Create a custom type
     * @param {String} modelName
     * @param {String} name
     * @param {String} parentName
     * @param {String} description
     */
    createCustomType(modelName, name, parentName, title, description): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in createCustomType";
        }

        if (name === undefined || name === null) {
            throw "Missing param 'name' in createCustomType";
        }

        let postBody = {
            'name': name,
            'parentName': parentName,
            'title': title,
            'description': description
        };

        let pathParams = {
            'modelName': modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Create a custom aspect
     * @param {String} modelName
     * @param {String} name
     * @param {String} parentName
     * @param {String} description
     */
    createCustomAspect(modelName, name, parentName, title, description): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in createCustomAspect";
        }

        if (name === undefined || name === null) {
            throw "Missing param 'name' in createCustomAspect";
        }

        let postBody = {
            'name': name,
            'parentName': parentName,
            'title': title,
            'description': description
        };

        let pathParams = {
            'modelName': modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Create a custom constraint
     * @param {String} modelName
     * @param {String} name
     * @param {String} type
     * @param {Object} parameters
     */
    createCustomConstraint(modelName, name, type, parameters): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in createCustomConstraint";
        }
        if (type === undefined || type === null) {
            throw "Missing param 'type' in createCustomConstraint";
        }
        if (name === undefined || name === null) {
            throw "Missing param 'name' in createCustomConstraint";
        }

        let postBody = {
            'name': name,
            'type': type,
            'parameters': parameters
        };

        let pathParams = {
            'modelName': modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/constraints', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Activate the custom model
     * @param {String} modelName
     */
    activateCustomModel(modelName): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in activateCustomModel";
        }

        let postBody = {
            'status': 'ACTIVE'
        };

        let pathParams = {
            'modelName': modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}?select=status', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Deactivate the custom model
     * @param {String} modelName
     */
    deactivateCustomModel(modelName): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in deactivateCustomModel";
        }

        let postBody = {
            'status': 'DRAFT'
        };

        let pathParams = {
            'modelName': modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}?select=status', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Add property into an existing aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {Object} properties
     */
    addPropertyToAspect(modelName, aspectName, properties): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in addPropertyToAspect";
        }

        if (aspectName === undefined || aspectName === null) {
            throw "Missing param 'aspectName' in addPropertyToAspect";
        }

        let postBody = {
            'name': aspectName,
            'properties': properties
        };

        let pathParams = {
            'modelName': modelName,
            'aspectName': aspectName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects/{aspectName}?select=props', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Add Property into an existing type
     * @param {String} modelName
     * @param {String} typeName
     * @param {Object} properties
     * @param {String} aspectName
     */
    addPropertyToType(modelName, typeName, properties, aspectName): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in addPropertyToType";
        }

        if (typeName === undefined || typeName === null) {
            throw "Missing param 'typeName' in addPropertyToType";
        }

        let postBody = {
            'name': aspectName,
            'properties': properties
        };

        let pathParams = {
            'modelName': modelName,
            'typeName': typeName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}?select=props', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Edit an existing custom model
     * @param {String} modelName
     * @param {String} description
     * @param {String} namespaceUri
     * @param {String} namespacePrefix
     */
    updateCustomModel(modelName, description, namespaceUri, namespacePrefix): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in updateCustomModel";
        }

        let postBody = {
            'name': modelName,
            'description': description,
            'namespaceUri': namespaceUri,
            'namespacePrefix': namespacePrefix
        };

        let pathParams = {
            'modelName': modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    updateCustomType(modelName, typeName, description, parentName, title): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in UpdateCustomType";
        }

        if (typeName === undefined || typeName === null) {
            throw "Missing param 'typeName' in UpdateCustomType";
        }

        let postBody = {
            'name': modelName,
            'parentName': parentName,
            'title': title,
            'description': description
        };

        let pathParams = {
            'modelName': modelName,
            'typeName': typeName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    updateCustomAspect(modelName, aspectName, description, parentName, title): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in updateCustomAspect";
        }

        if (aspectName === undefined || aspectName === null) {
            throw "Missing param 'aspectName' in updateCustomAspect";
        }

        let postBody = {
            'name': modelName,
            'parentName': parentName,
            'title': title,
            'description': description
        };

        let pathParams = {
            'modelName': modelName,
            'aspectName': aspectName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects/{aspectName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom models
     */
    getAllCustomModel(): Promise<any> {

        let postBody = {};

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model
     * @param {String} modelName
     * @param {Object} queryParams
     */
    getCustomModel(modelName, queryParamsInput): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getCustomModel";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom model types
     * @param {String} modelName
     */
    getAllCustomType(modelName): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getAllCustomType";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model type
     * @param {String} modelName
     * @param {String} typeName
     * @param {Object} queryParams
     */
    getCustomType(modelName, typeName, queryParamsInput): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getCustomType";
        }

        if (typeName === undefined || typeName === null) {
            throw "Missing param 'typeName' in getCustomType";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName,
            'typeName': typeName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom model aspect
     * @param {String} modelName
     * @param {Object} queryParamsInput
     */
    getAllCustomAspect(modelName, queryParamsInput): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getAllCustomAspect";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {Object} queryParamsInput
     */
    getCustomAspect(modelName, aspectName, queryParamsInput): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getCustomAspect";
        }

        if (aspectName === undefined || aspectName === null) {
            throw "Missing param 'aspectName' in getCustomAspect";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName,
            'aspectName': aspectName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects/{aspectName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom model defined constraints
     * @param {String} modelName
     * @param {Object} queryParams
     */
    getAllCustomConstraints(modelName, queryParamsInput): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getAllCustomConstraints";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/constraints', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model defined constraints
     * @param {String} modelName
     * @param {String} constraintName
     * @param {Object} queryParams
     */
    getCustomConstraints(modelName, constraintName, queryParamsInput): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getCustomConstraints";
        }

        if (constraintName === undefined || constraintName === null) {
            throw "Missing param 'constraintName' in getCustomConstraints";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName,
            'constraintName': constraintName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/constraints{constraintName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Delete the given custom model
     * @param {String} modelName
     */
    deleteCustomModel(modelName): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in deleteCustomModel";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Delete the given custom type
     * @param {String} modelName
     * @param {String} typeName
     */
    deleteCustomType(modelName, typeName): Promise<any> {

        if (modelName === undefined || modelName === null) {
            throw "Missing param 'modelName' in getCustomConstraints";
        }

        if (typeName === undefined || typeName === null) {
            throw "Missing param 'modelName' in deleteCustomType";
        }

        let postBody = {};

        let pathParams = {
            'modelName': modelName,
            'typeName': typeName
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

}
