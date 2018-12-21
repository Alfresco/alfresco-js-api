/*global describe, it, beforeEach */

import { AlfrescoApiCompatibility as AlfrescoApi } from '@alfresco/js-api';
let expect = require('chai').expect;
let AuthBpmMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
let ModelsMock = require('../../test/mockObjects/mockAlfrescoApi').ActivitiMock.Models;

describe('Activiti Models Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.modelsMock = new ModelsMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get activiti model', function (done) {
        this.modelsMock.get200getModels();

        let opts = {
            'filter': 'myReusableForms',
            'modelType': 2
        };

        this.alfrescoJsApi.activiti.modelsApi.getModels(opts).then((data)=> {
            expect(data.data[0].name).equal('Metadata');
            done();
        });

    });
});
