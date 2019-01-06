/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '@alfresco/js-api';
let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let ProcessInstanceVariablesMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.ProcessInstanceVariables;

describe('Activiti Process Instance Variables Api', function () {

    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.variablesMock = new ProcessInstanceVariablesMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(function () {
            done();
        });
    });

    describe('get variables', function() {

        it('should return all variables for a process instance', function (done) {

            let processInstanceId = '111';
            this.variablesMock.addListProcessInstanceVariables200Response(processInstanceId);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariables(processInstanceId).then(function (data) {
                expect(data.length).equal(2);
                done();
            });
        });

        it('should raise an error when API returns an error response', function (done) {

            let processInstanceId = '111';
            this.variablesMock.addListProcessInstanceVariables500Response(processInstanceId);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariables(processInstanceId).then(function () {
            },                                                                                                          function (error) {
                expect(error.status).equal(500);
                expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                done();
            });
        });

    });

    describe('create variables', function() {

        it('should return all variables for a process instance', function (done) {

            let processInstanceId = '111';
            this.variablesMock.addPostProcessInstanceVariables200Response(processInstanceId);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.createProcessInstanceVariables(processInstanceId, []).then(function (data) {
                expect(data.length).equal(2);
                done();
            });
        });

        it('should raise an error when API returns an error response', function (done) {

            let processInstanceId = '111';
            this.variablesMock.addPostProcessInstanceVariables500Response(processInstanceId);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.createProcessInstanceVariables(processInstanceId, []).then(function () {
            },                                                                                                                 function (error) {
                expect(error.status).equal(500);
                expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                done();
            });
        });

    });

    describe('create or update variables', function() {

        it('should return all variables for a process instance', function (done) {

            let processInstanceId = '111';
            this.variablesMock.addPutProcessInstanceVariables200Response(processInstanceId);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.createOrUpdateProcessInstanceVariables(processInstanceId, []).then(function (data) {
                expect(data.length).equal(2);
                done();
            });
        });

        it('should raise an error when API returns an error response', function (done) {

            let processInstanceId = '111';
            this.variablesMock.addPutProcessInstanceVariables500Response(processInstanceId);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.createOrUpdateProcessInstanceVariables(processInstanceId, []).then(function () {
            },                                                                                                                         function (error) {
                expect(error.status).equal(500);
                expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                done();
            });
        });

    });

    describe('get variable', function() {

        it('should call API to get variable', function (done) {

            let processInstanceId = '111';
            let variableName = 'var1';
            this.variablesMock.addGetProcessInstanceVariable200Response(processInstanceId, variableName);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariable(processInstanceId, variableName).then(function (data) {
                expect(data.name).equal('variable1');
                expect(data.value).equal('Value 123');
                done();
            },                                                                                                                       function() {
                done();
            });
        });

        it('should raise an error when API returns an error response', function (done) {

            let processInstanceId = '111';
            let variableName = 'var1';
            this.variablesMock.addGetProcessInstanceVariable500Response(processInstanceId, variableName);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.getProcessInstanceVariable(processInstanceId, variableName).then(function () {
            },                                                                                                                       function (error) {
                expect(error.status).equal(500);
                expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                done();
            });
        });

    });

    describe('update variable', function() {

        it('should call API to update variable', function (done) {

            let processInstanceId = '111';
            let variableName = 'var1';
            this.variablesMock.addUpdateProcessInstanceVariable200Response(processInstanceId, variableName);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.updateProcessInstanceVariable(processInstanceId, variableName, {}).then(function () {
                done();
            });
        });

        it('should raise an error when API returns an error response', function (done) {

            let processInstanceId = '111';
            let variableName = 'var1';
            this.variablesMock.addUpdateProcessInstanceVariable500Response(processInstanceId, variableName);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.updateProcessInstanceVariable(processInstanceId, variableName, {}).then(function () {
            },                                                                                                                              function (error) {
                expect(error.status).equal(500);
                expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                done();
            });
        });

    });

    describe('delete variable', function() {

        it('should call API to delete variables', function (done) {

            let processInstanceId = '111';
            let variableName = 'var1';
            this.variablesMock.addDeleteProcessInstanceVariable200Response(processInstanceId, variableName);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.deleteProcessInstanceVariable(processInstanceId, variableName).then(function () {
                done();
            });
        });

        it('should raise an error when API returns an error response', function (done) {

            let processInstanceId = '111';
            let variableName = 'var1';
            this.variablesMock.addDeleteProcessInstanceVariable500Response(processInstanceId, variableName);

            this.alfrescoJsApi.activiti.processInstanceVariablesApi.deleteProcessInstanceVariable(processInstanceId, variableName).then(function () {
            },                                                                                                                          function (error) {
                expect(error.status).equal(500);
                expect(error.message).equal('{"messageKey":"UNKNOWN","message":"Unknown error"}');
                done();
            });
        });

    });

});
