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

import { ClassDescription } from '../model/classDescription';
import { BaseApi } from './base.api';

/**
 * Classes service.
 * @module api/ClassesApi
 * @version 1.4.0
 */

/**
 * Constructs a new ClassesApi.
 * @alias module:api/ClassesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class ClassesApi extends BaseApi {

    private path: string = '/api/classes';

    private get contextRoot(): string {
        return this.apiClient.config.contextRoot + '/s';
    }


    /**
     * Function to receive the result of the getClass operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ClassDescription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the class information for the specified className.
     * @param {String} className The identifier of the class.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClassDescription}
     * data is of type: {module:model/ClassDescription}
     */
    getClass(className: string, opts?: any): Promise<ClassDescription> {
        opts = opts || {};

        // verify the required parameter 'className' is set
        if (className === undefined || className === null) {
            throw "Missing param 'className' in getClass";
        }

        let postBody = null;
        let pathParams = {
            'className': className
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            this.path + '/{className}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ClassDescription, this.contextRoot
        );
    }

    getSubclasses(className: string, opts?: any): Promise<ClassDescription[]> {
        opts = opts || {};

        // verify the required parameter 'className' is set
        if (className === undefined || className === null) {
            throw "Missing param 'className'";
        }

        let postBody = null;
        let pathParams = {
            'className': className
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            `${this.path}/{className}/subclasses`, 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ClassDescription, this.contextRoot
        );
    }
}
