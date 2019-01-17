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
import { UsersApi } from '../../../../api/activiti-rest-api/api/users.api';
import { ResultListDataRepresentationLightUserRepresentation } from '../../../../api/activiti-rest-api/model/resultListDataRepresentationLightUserRepresentation';

/**
 * @deprecated 3.0.0
 */
export class UsersWorkflowApi {

    private usersApi: UsersApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.usersApi = new UsersApi(alfrescoApi);
    }

    getUsers(opts?: any): Promise<ResultListDataRepresentationLightUserRepresentation> {
        return this.usersApi.getUsers(opts);
    }
}
