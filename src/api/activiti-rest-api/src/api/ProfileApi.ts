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
import { BpmClient } from '../../../../bpmClient';

export class ProfileApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

    /**
     * Function to receive the result of the changePassword operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change user password
     * @param {module:model/ChangePasswordRepresentation} changePasswordRepresentation changePasswordRepresentation
     */
    changePassword(changePasswordRepresentation) {
        let postBody = changePasswordRepresentation;

        // verify the required parameter 'changePasswordRepresentation' is set
        if (changePasswordRepresentation === undefined || changePasswordRepresentation === null) {
            throw "Missing param 'changePasswordRepresentation' in changePassword";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/profile-password', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the getProfilePicture operation.
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user profile picture
     * Generally returns an image file
     */
    getProfilePicture() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = File;

        return this.apiClient.callApi(
            '/api/enterprise/profile-picture', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Retrieve user URL profile picture
     * Generally returns an image file
     */
    getProfilePictureUrl() {
        return this.apiClient.basePath + '/app/rest/admin/profile-picture';
    }

    /**
     * Function to receive the result of the getProfile operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user information
     *  This is useful to get the name, email, the groups that the user is part of, the user picture, etc.
     */
    getProfile() {
        let postBody = null;


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/profile', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the updateProfile operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user information
     * Only a first name, last name, email and company can be updated
     * @param {module:model/UserRepresentation} userRepresentation userRepresentation
     */
    updateProfile(userRepresentation) {
        let postBody = userRepresentation;

        // verify the required parameter 'userRepresentation' is set
        if (userRepresentation === undefined || userRepresentation === null) {
            throw "Missing param 'userRepresentation' in updateProfile";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/profile', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }

    /**
     * Function to receive the result of the uploadProfilePicture operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ImageUploadRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change user profile picture
     * @param {File} file file
     */
    uploadProfilePicture(file) {
        let postBody = null;

        // verify the required parameter 'file' is set
        if (file === undefined || file === null) {
            throw "Missing param 'file' in uploadProfilePicture";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {
            'file': file
        };

        let authNames = [];
        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/profile-picture', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
