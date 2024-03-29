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

import { AlfrescoApi } from '../../src/alfrescoApi';
import { SecurityGroupsApi } from '../../src/api/gs-classification-rest-api';
import { expect } from 'chai';
import { SecurityGroupBody } from '../../src/api/gs-classification-rest-api/model/securityGroupBody';
import { EcmAuthMock } from '../../test/mockObjects';
import { SecurityGroupApiMock } from '../../test/mockObjects/goverance-services/security-groups.mock';

describe('Security Group API test', () => {
    let authResponseMock: EcmAuthMock;
    let securityGroupMock: SecurityGroupApiMock
    let securityGroupApi: SecurityGroupsApi;
    const securityGroupBody: SecurityGroupBody = {
        "groupName": "Alfresco",
        "groupType": "HIERARCHICAL"
    }
    let securityGroupId: string;

    beforeEach(async () => {
        const hostEcm = 'http://127.0.0.1:8080';
        authResponseMock = new EcmAuthMock(hostEcm);
        authResponseMock.get201Response();
        securityGroupMock  = new SecurityGroupApiMock(hostEcm);
        const alfrescoApi = new AlfrescoApi({
            hostEcm: hostEcm
        });
        securityGroupApi = new SecurityGroupsApi(alfrescoApi);
        await alfrescoApi.login('admin', 'admin');
    });

    it('create Security Group', async () => {
        securityGroupMock.createSecurityGroup200Response();
        await securityGroupApi.createSecurityGroup(securityGroupBody)
            .then(data => {
                securityGroupId = data.entry.id;
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Alfresco');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('get All Security Groups', async () => {
        securityGroupMock.getSecurityGroups200Response();
        await securityGroupApi.getSecurityGroups()
            .then(data => {
                expect(data.list.entries.length).to.be.above(0);
            });
    });

    it('get Security Group Information', async () => {
        securityGroupMock.getSecurityGroupInfo200Response(securityGroupId);
        await securityGroupApi.getSecurityGroupInfo(securityGroupId)
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Alfresco');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('update Security Group', async () => {
        securityGroupMock.updateSecurityGroup200Response(securityGroupId);
        const updatedSecurityGroupBody: SecurityGroupBody = {
            "groupName": "Nasa",
        }
        await securityGroupApi.updateSecurityGroup(securityGroupId,updatedSecurityGroupBody)
            .then(data => {
                expect(data.entry.id).not.equal(null);
                expect(data.entry.groupName).to.be.equal('Nasa');
                expect(data.entry.groupType).to.be.equal('HIERARCHICAL');
            });
    });

    it('delete Security Group', async () => {
        securityGroupMock.deleteSecurityGroup200Response(securityGroupId);
        await securityGroupApi.deleteSecurityGroup(securityGroupId).then((data) => {
            Promise.resolve(data);
        }).catch((err)=>{
            Promise.reject(err);
        });
    });
});
