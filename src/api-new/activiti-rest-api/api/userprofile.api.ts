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

/**
* Userprofile service.
* @module UserprofileApi
*/
export class UserprofileApi extends BaseApi {
    /**
    * Change user password
    * 
    * 
    * 
    * @param changePasswordRepresentation changePasswordRepresentation
    * @return Promise<{}>
    */
    changePassword(changePasswordRepresentation: ChangePasswordRepresentation): Promise<any> {

        let postBody = changePasswordRepresentation;

        if (changePasswordRepresentation === undefined || changePasswordRepresentation === null) {
            throw new Error("Required param 'changePasswordRepresentation' in changePasswordUsingPOST");
        }

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
            '/enterprise/profile-password', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Retrieve user profile picture
        * 
        * Generally returns an image file
        * 
        * @return Promise<Blob>
        */
    getProfilePicture(): Promise<Blob> {

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
            '/enterprise/profile-picture', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
            '/enterprise/profile', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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

        let postBody = userRepresentation;

        if (userRepresentation === undefined || userRepresentation === null) {
            throw new Error("Required param 'userRepresentation' in updateProfile");
        }

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
            '/enterprise/profile', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Change user profile picture
        * 
        * 
        * 
        * @param file file
        * @return Promise<ImageUploadRepresentation>
        */
    uploadProfilePicture(file: Blob): Promise<ImageUploadRepresentation> {

        let postBody = null;

        if (file === undefined || file === null) {
            throw new Error("Required param 'file' in uploadProfilePictureUsingPOST");
        }

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
            '/enterprise/profile-picture', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
