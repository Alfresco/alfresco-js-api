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

import { NodesApi } from './content-rest-api/src/api/nodesApi';
import * as _Emitter from 'event-emitter';
import { AlfrescoApi } from '../alfrescoApi';
import { NodeEntry } from '../api-new/content-rest-api/model/nodeEntry';
import { ModelError } from '../api-new/content-rest-api/model/modelError';

const Emitter = _Emitter;

export class AlfrescoUpload extends NodesApi {

    constructor(alfrescoApi: AlfrescoApi) {
        super();
        this.init(alfrescoApi);
        Emitter.call(this);
    }

    uploadFile(fileDefinition, relativePath: string, rootFolderId: string, nodeBody: any, opts?: any): Promise<NodeEntry | ModelError | _Emitter> {
        rootFolderId = rootFolderId || '-root-';
        opts = opts || {};

        let nodeBodyRequired = {
            'name': fileDefinition.name,
            'nodeType': 'cm:content',
            'relativePath': relativePath
        };

        nodeBody = Object.assign(nodeBodyRequired, nodeBody);

        let formParam = Object.assign({}, nodeBody.properties || {});
        formParam.filedata = fileDefinition;
        formParam.relativePath = relativePath;
        if (opts.name) {
            formParam.name = opts.name;
        }

        formParam = Object.assign(formParam, opts);

        return this.nodesApi.createNode(rootFolderId, nodeBody, opts, formParam);
    }
}
