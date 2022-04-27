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

import { BaseApi } from './base.api';
import { throwIfNotDefined } from '../../../assert';
import { NodeSecurityMarkBody } from '../model/nodeSecurityMarkBody';
import { SecurityMarkPaging } from '../model';

/**
 * @module NodeSecurityMarksApi
 */
export class NodeSecurityMarksApi extends BaseApi {
    /**
     * Add/Remove security mark on a node
     * @param nodeId The key for the node id.
     * @param dataBody Array of ManageSecurityMarkBody.
     * @return Promise<SecurityMarkPaging>
     */
    manageSecurityMarksOnNode(nodeId: string, dataBody: Array<NodeSecurityMarkBody>): Promise<SecurityMarkPaging> {
        throwIfNotDefined(nodeId, 'nodeId');
        throwIfNotDefined(dataBody, 'dataBody');

        let postBody = dataBody;
        let pathParams = {
            nodeId: nodeId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/secured-nodes/{nodeId}/securing-marks',
            'POST',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityMarkPaging
        );
    }

    /**
     * Get security marks on a node
     * @param nodeId The key for the node id.
     * @param opts.inUse The key for the security mark is in use or not.
     * @return Promise<SecurityMarkPaging>
     */
     getSecurityMarksOnNode(nodeId: string, opts?: any): Promise<SecurityMarkPaging> {
        throwIfNotDefined(nodeId, 'nodeId');

        let postBody = null;
        let pathParams = {
            nodeId: nodeId
        };
        let queryParams = {
            inUse: opts['inUse'],
        };
        let headerParams = {};
        let formParams = {};
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/secured-nodes/{nodeId}/securing-marks',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            contentTypes,
            accepts,
            SecurityMarkPaging
        );
    }
}
