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
import { AlfrescoApiConfig } from '../../src/alfrescoApiConfig';
import { AlfrescoApiCompatibility as AlfrescoApi } from '../../src/alfrescoApiCompatibility';
import { BpmAuthMock, TaskFormMock } from '../mockObjects';

describe('Activiti Task Api', () => {
    let authResponseBpmMock: BpmAuthMock;
    let taskFormMock: TaskFormMock;
    let alfrescoJsApi: AlfrescoApi;

    beforeEach(async () => {
        const BPM_HOST = 'http://127.0.0.1:9999';

        authResponseBpmMock = new BpmAuthMock(BPM_HOST);
        taskFormMock = new TaskFormMock(BPM_HOST);

        authResponseBpmMock.get200Response();

        alfrescoJsApi = new AlfrescoApi({
            hostBpm: BPM_HOST,
            provider: 'BPM'
        } as AlfrescoApiConfig);

        await alfrescoJsApi.login('admin', 'admin');
    });

    it('get Task Form variables list', async () => {
        taskFormMock.get200getTaskFormVariables();

        const taskId = '5028';
        const data = await alfrescoJsApi.activiti.taskFormsApi.getTaskFormVariables(taskId);

        expect(data[0].id).equal('initiator');
    });

    it('Check cookie settings', async () => {
        taskFormMock.get200getTaskFormVariables();

        const taskId = '5028';
        await alfrescoJsApi.activiti.taskFormsApi.getTaskFormVariables(taskId);
        expect((alfrescoJsApi.activiti.taskFormsApi.apiClient as any).authentications.cookie).equal('ACTIVITI_REMEMBER_ME=NjdOdGwvcUtFTkVEczQyMGh4WFp5QT09OmpUL1UwdFVBTC94QTJMTFFUVFgvdFE9PQ');
    });

});
