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

import { ChangePasswordRepresentation } from '../model/changePasswordRepresentation';
import { ImageUploadRepresentation } from '../model/imageUploadRepresentation';
import { UserRepresentation } from '../model/userRepresentation';
import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';

/**
* Userprofile service.
* @module UserprofileApi
*/
export class UserProfileApi extends BaseApi {
    /**
    * Change user password
    *
    *
    *
    * @param changePasswordRepresentation changePasswordRepresentation
    * @return Promise<{}>
    */
    changePassword(changePasswordRepresentation: ChangePasswordRepresentation): Promise<any> {
        throwIfNotDefined(changePasswordRepresentation, 'changePasswordRepresentation');

        let postBody = changePasswordRepresentation;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/profile-password', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Retrieve user profile picture
        *
        * Generally returns an image file
        *
        * @return Promise<Blob>
        */
    getProfilePicture(): Promise<any> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json', '*/*'];

        return this.apiClient.callApi(
            '/api/enterprise/profile-picture', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

    /**
     * Retrieve user URL profile picture
     * Generally returns an image file
     */
    getProfilePictureUrl() {
        return this.apiClient.basePath + '/app/rest/admin/profile-picture';
    }

    /**
        * Get user profile
        *
        * This operation returns account information for the current user. This is useful to get the name, email, the groups that the user is part of, the user picture, etc.
        *
        * @return Promise<UserRepresentation>
        */
    getProfile(): Promise<UserRepresentation> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/profile', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserRepresentation);
    }
    /**
        * Update user profile
        *
        * Only a first name, last name, email and company can be updated
        *
        * @param userRepresentation userRepresentation
        * @return Promise<UserRepresentation>
        */
    updateProfile(userRepresentation: UserRepresentation): Promise<UserRepresentation> {
        throwIfNotDefined(userRepresentation, 'userRepresentation');

        let postBody = userRepresentation;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/profile', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, UserRepresentation);
    }
    /**
        * Change user profile picture
        *
        *
        *
        * @param file file
        * @return Promise<ImageUploadRepresentation>
        */
    uploadProfilePicture(file: any): Promise<ImageUploadRepresentation> {
        throwIfNotDefined(file, 'file');

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/profile-picture', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ImageUploadRepresentation);
    }

}
