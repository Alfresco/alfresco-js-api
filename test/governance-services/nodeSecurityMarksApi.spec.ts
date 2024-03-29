/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
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

import { expect } from 'chai';
import { AlfrescoApi } from '../../src/alfrescoApi';
import { NodeSecurityMarksApi } from '../../src/api/gs-classification-rest-api';
import { NodeSecurityMarkBody } from '../../src/api/gs-classification-rest-api/model/nodeSecurityMarkBody';
import { EcmAuthMock } from '../mockObjects/content-services/ecm-auth.mock';
import { NodeSecurityMarksApiMock } from '../mockObjects/goverance-services/node-security-marks.mock';

describe('Node Security Mark API test', () => {
    let authResponseMock: EcmAuthMock;
    let nodeSecurityMarksMock: NodeSecurityMarksApiMock;
    let nodeSecurityMarksApi: NodeSecurityMarksApi;
    const nodeSecurityMarkBody: Array<NodeSecurityMarkBody> = [
        {
            groupId: 'securityGroupId1',
            op: 'ADD',
            id: 'Sh1G8vTQ',
        },
        {
            groupId: 'securityGroupId2',
            op: 'ADD',
            id: 'Sh1G8vTR',
        }
    ];

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();
        nodeSecurityMarksMock = new NodeSecurityMarksApiMock(hostEcm);
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm,
        });
        nodeSecurityMarksApi = new NodeSecurityMarksApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('add or remove security marks on a node', async () => {
        const nodeId = 'h3bdk2knw2kn';
        nodeSecurityMarksMock.post200manageSecurityMarkOnNode(nodeId);
        await nodeSecurityMarksApi.manageSecurityMarksOnNode(nodeId, nodeSecurityMarkBody).then((data) => {
            expect(data.list.entries[0].entry.groupId).equal('securityGroupId1');
            expect(data.list.entries[0].entry.id).equal('Sh1G8vTQ');
            expect(data.list.entries[0].entry.name).equal('SecurityMarkTest1');
        });
    });

    it('get security marks on a node', async () => {
        const nodeId = 'h3bdk2knw2kn';
        nodeSecurityMarksMock.get200SecurityMarkOnNode(nodeId);
        await nodeSecurityMarksApi.getSecurityMarksOnNode(nodeId).then((data) => {
            expect(data.list.entries[1].entry.groupId).equal('securityGroupId2');
            expect(data.list.entries[1].entry.id).equal('Sh1G8vTR');
            expect(data.list.entries[1].entry.name).equal('SecurityMarkTest2');
        });
    });
});
