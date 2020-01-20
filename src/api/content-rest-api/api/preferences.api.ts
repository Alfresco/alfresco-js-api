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

import { PreferenceEntry } from '../model/preferenceEntry';
import { PreferencePaging } from '../model/preferencePaging';
import { BaseApi } from './base.api';
import { buildCollectionParam } from '../../../alfrescoApiClient';
import { throwIfNotDefined } from '../../../assert';

/**
* Preferences service.
* @module PreferencesApi
*/
export class PreferencesApi extends BaseApi {
    /**
    * Get a preference
    *
    * Gets a specific preference for person **personId**.

You can use the -me- string in place of <personId> to specify the currently authenticated user.

    *
    * @param personId The identifier of a person.
    * @param preferenceName The name of the preference.
    * @param opts Optional parameters
    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<PreferenceEntry>
    */
    getPreference(personId: string, preferenceName: string, opts?: any): Promise<PreferenceEntry> {
        throwIfNotDefined(personId, 'personId');
        throwIfNotDefined(preferenceName, 'preferenceName');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId, 'preferenceName': preferenceName
        };

        let queryParams = {
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/preferences/{preferenceName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PreferenceEntry);
    }
    /**
        * List preferences
        *
        * Gets a list of preferences for person **personId**.

    You can use the -me- string in place of <personId> to specify the currently authenticated user.
    Note that each preference consists of an **id** and a **value**.

    The **value** can be of any JSON type.

        *
        * @param personId The identifier of a person.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<PreferencePaging>
        */
    listPreferences(personId: string, opts?: any): Promise<PreferencePaging> {
        throwIfNotDefined(personId, 'personId');

        opts = opts || {};
        let postBody = null;

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'fields': buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/preferences', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, PreferencePaging);
    }

}
