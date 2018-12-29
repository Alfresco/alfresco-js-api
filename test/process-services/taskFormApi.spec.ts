/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '@alfresco/js-api';
let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let TaskFormMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.TaskFormMock;

describe('Activiti Task Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.taskFormMock = new TaskFormMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get Task Form variables list', function (done) {
        this.taskFormMock.get200getTaskFormVariables();

        let taskId = 5028;
        this.alfrescoJsApi.activiti.taskFormsApi.getTaskFormVariables(taskId).then((data)=> {
            expect(data[0].id).equal('initiator');
            done();
        });
    });

    it('Check cookie settings', function (done) {
        this.taskFormMock.get200getTaskFormVariables();

        let taskId = 5028;
        this.alfrescoJsApi.activiti.taskFormsApi.getTaskFormVariables(taskId).then(()=> {
            expect(this.alfrescoJsApi.activiti.taskFormsApi.apiClient.authentications.cookie).equal('ACTIVITI_REMEMBER_ME=NjdOdGwvcUtFTkVEczQyMGh4WFp5QT09OmpUL1UwdFVBTC94QTJMTFFUVFgvdFE9PQ');
            done();
        },(error)=>{
            console.log('error'+error);
        });
    });

});
