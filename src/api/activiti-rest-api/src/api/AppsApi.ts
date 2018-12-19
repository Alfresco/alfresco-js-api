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

import { AlfrescoApi } from '../../../../alfrescoApi';
import { ProcessClient } from '../../../../processClient';

export class AppsApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the deployAppDefinitions operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy published app
     * After creating and puclished an app the user can add it to his/her landing page.
     * @param {module:model/RuntimeAppDefinitionSaveRepresentation} saveObject saveObject
     */
    deployAppDefinitions  (saveObject) {
      let postBody = saveObject;

      // verify the required parameter 'saveObject' is set
      if (saveObject === undefined || saveObject === null) {
        throw "Missing param 'saveObject' in deployAppDefinitions";
      }


      let pathParams = {};
      let queryParams = {};
      let headerParams = {};
      let formParams = {};


      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/runtime-app-definitions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the exportAppDefinition operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export App Definition
     * This will return a zip file containing the app definition model and all related models (process definitions and forms).
     * @param {Integer} modelId modelId from a runtime app or the id of an app definition model
     */
    exportAppDefinition  (modelId) {
      let postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId === undefined || modelId === null) {
        throw "Missing param 'modelId' in exportAppDefinition";
      }


      let pathParams = {
        'modelId': modelId
      };
      let queryParams = {};
      let headerParams = {};
      let formParams = {};


      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/{modelId}/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getAppDefinitions operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List runtime apps
     * When a user logs in into the Alfresco Activiti BPM Suite, the landing page is displayed containing all the apps that the user is allowed to see and use.
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    getAppDefinitions  () {
      let postBody = null;


      let pathParams = {};
      let queryParams = {};
      let headerParams = {};
      let formParams = {};


      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/runtime-app-definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the importAppDefinition operation.
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import App Definition
     * This is useful to bootstrap an environment (for users or continous integration).
     * @param {File} file file
     * data is of type: {module:model/AppDefinitionRepresentation}
     */
    importAppDefinition  (file) {
      let postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw "Missing param 'file' in importAppDefinition";
      }


      let pathParams = {};
      let queryParams = {};
      let headerParams = {};
      let formParams = {
        'file': file
      };


      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the importAppDefinition operation.
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import App
     * To import an app to an existing app definition to create a new version instead of importing a new app definition.
     * @param {Integer} modelId modelId
     * @param {File} file file
     * data is of type: {module:model/AppDefinitionRepresentation}
     */
    importNewAppDefinition  (modelId, file) {
      let postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId === undefined || modelId === null) {
        throw "Missing param 'modelId' in importAppDefinition";
      }

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw "Missing param 'file' in importAppDefinition";
      }


      let pathParams = {
        'modelId': modelId
      };
      let queryParams = {};
      let headerParams = {};
      let formParams = {
        'file': file
      };


      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/{modelId}/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the publishAppDefinition operation.
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionUpdateResultRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish App
     * Before an app model can be used, it need to be published
     * @param {Integer} modelId modelId
     * @param {module:model/AppDefinitionPublishRepresentation} publishModel publishModel
     * data is of type: {module:model/AppDefinitionUpdateResultRepresentation}
     */
    publishAppDefinition  (modelId, publishModel) {
      let postBody = publishModel;

      // verify the required parameter 'modelId' is set
      if (modelId === undefined || modelId === null) {
        throw "Missing param 'modelId' in publishAppDefinition";
      }

      // verify the required parameter 'publishModel' is set
      if (publishModel === undefined || publishModel === null) {
        throw "Missing param 'publishModel' in publishAppDefinition";
      }


      let pathParams = {
        'modelId': modelId
      };
      let queryParams = {};
      let headerParams = {};
      let formParams = {};


      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/{modelId}/publish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType
      );
    }

    /**
     * Update an App Definition
     * Before an app model can be used, it need to be published
     * @param {Integer} modelId modelId
     * @param {module:model/AppDefinitionPublishRepresentation} publishModel publishModel
     * data is of type: {module:model/AppDefinitionUpdateResultRepresentation}
     */
    updateAppDefinition  (modelId, updatedModel) {

      // verify the required parameter 'modelId' is set
      if (modelId === undefined || modelId === null) {
        throw "Missing param 'modelId' in publishAppDefinition";
      }

      // verify the required parameter 'publishModel' is set
      if (updatedModel === undefined || updatedModel === null) {
        throw "Missing param 'publishModel' in publishAppDefinition";
      }

      let postBody = updatedModel;


      let pathParams = {
        'modelId': modelId
      };
      let queryParams = {};
      let headerParams = {};
      let formParams = {};


      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/{modelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType
      );
    }
  }
