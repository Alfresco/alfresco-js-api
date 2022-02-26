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
